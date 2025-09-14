const Task = require('../models/Task.js')
const createError = require('../errors/custom-error.js')
const asyncWrapper = require('../middleware/async-wrapper.js')

const getAll = asyncWrapper(async (req, res, next) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res, next) => {
    await Task.create(req.body);
    res.status(201).json(req.body)
});

const getTask = asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const task = await Task.findOne({_id: id})
    if(!task){
        const err = createError("Not Found", 404);
        return next(err);
    }
    res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const task = await Task.findOneAndUpdate({_id:id}, req.body, {new:true, runValidators:true});
    if(!task){
        const err = createError("Not Found", 404);
        return next(err);
    }
    res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const task = await Task.findOneAndDelete({_id:id});
    if(!task){
        const err = createError("Not Found", 404);
        return next(err);
    }
    res.status(200).json(task);
})

module.exports = {getAll, createTask, getTask, updateTask, deleteTask};