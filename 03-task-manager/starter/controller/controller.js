const getAll = (req, res) => {
    res.status(200).json("These are the tasks...");
};

const createTask = (req, res) => {
    const body = req.body;
    console.log(body);
    if(!body){
        return res.status(400).json({success: false, msg: "Please enter some text as a task"});
    }
    res.status(200).json({success: true, task: body.task})
};

const getTask = (req, res) => {
    const id = req.params;
    res.status(200).json(id);
};

const updateTask = (req, res) => {
    const id = req.params;
    res.status(200).json(`The task has been updated`);
}

const deleteTask = (req, res) => {
    const id = req.params;
    res.status(200).json(`The task has been deleted`);
}

module.exports = {getAll, createTask, getTask, updateTask, deleteTask};