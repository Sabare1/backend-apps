const Task = require('../models/Task.js')

const getAll = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg: error});
    }
};

const createTask = async (req, res) => {
    const body = req.body;
    try{
        await Task.create(req.body);
        res.status(201).json(body)
    }
    catch(err){
        res.status(500).json({msg: err});
    }
};

const getTask = async (req, res) => {
    try{
        const id = req.params.id;
        const task = await Task.findOne({_id: id})
        if(!task){
            return res.status(404).json({success: false, msg:"Cannot find the task you're looking for!"});
        }
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({msg:error})
    }
};

const updateTask = (req, res) => {
    try{
        const { id } = req.body;
        const task = Task.findOneAndUpdate({_id:id}, req.body)
        if(!task){
            return res.status(404).json({msg: "Cannot find the task you're looking for!"});
        }
        res.status(200).json({ task });
    }
    catch(error){
        res.status(500).json({msg:error});
    }
}

const deleteTask = async (req, res) => {
    try{
        const id = req.params.id;
        const task = await Task.findOneAndDelete({_id:id});
        if(!task){
            return res.status(404).json({success: false, msg: "Cannot find the task you're looking for!"});
        }
        res.status(200).json(task);
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

module.exports = {getAll, createTask, getTask, updateTask, deleteTask};