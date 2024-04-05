const Task = require('../models/Task');

const getAllTasks = (req, res) => {
    res.send('all items')
}
const getTask = (req, res) => {
    res.json({id:req.params.id})
}
const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}
const updateTask = (req, res) => {
    res.send('update task')
}
const deleteTask = (req,bres) => {
    res.send('delete task')
}
module.exports = {
    getAllTasks, getTask, createTask, updateTask, deleteTask,
}