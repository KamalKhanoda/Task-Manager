const TaskModel = require("../Models/TaskModel");

const createTask = async (req, res) => {
    const data = req.body;
    try{
        const task = new TaskModel(data);
        await task.save();
        res.status(201).json({message: "Task created successfully", success:true});
    }catch(err){
        res.status(500).json({message: "Failed to create task", success:false});
    }
}

const getAllTasks = async (req, res) => {
    try{
        const data = await TaskModel.find({});
        res.status(200).json({data, success:true, message: "Tasks fetched successfully"});
    }catch(err){
        res.status(500).json({message: "Failed to fetch tasks", success:false});
    }
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const obj = {$set:{...body}};
    try{ 
        const task = await TaskModel.findByIdAndUpdate(id, obj);
        res.status(200).json({message: "Task updated successfully", success:true});
    }catch(err){
        res.status(500).json({message: "Failed to update task", success:false});
    }
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try{
        await TaskModel.findByIdAndDelete(id);
        res.status(200).json({message: "Task deleted successfully", success:true});
    }catch(err){
        res.status(500).json({message: "Failed to delete task", success:false});
    }
}

module.exports = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask
};  

