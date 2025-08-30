const Router = require('express').Router();
const { createTask, getAllTasks, updateTask, deleteTask } = require('../Controllers/TaskController');

Router.post('/', createTask);
Router.get('/', getAllTasks);
Router.put('/:id', updateTask);
Router.delete('/:id', deleteTask);

module.exports = Router;