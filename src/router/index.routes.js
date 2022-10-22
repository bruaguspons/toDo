const { Router } = require("express");
const {getAllTasks, getTask, postTask, updateTask, deleteTask} = require("./../controllers/task.controller")
const router = Router();

router.get('/tasks', getAllTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks', postTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', updateTask)

module.exports = router