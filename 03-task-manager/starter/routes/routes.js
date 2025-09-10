const express = require('express')
const router = express.Router();
const { getAll, createTask, getTask, updateTask, deleteTask } = require('../controller/controller.js')

router.route('/').get(getAll).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router