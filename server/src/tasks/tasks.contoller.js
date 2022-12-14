const express = require("express");
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require("./tasks.service");

router.get('/get/:id', async (request, response) => {
    const { id } = request.params;
    const gotTasks = await getTasks(id);
    response.status(200).send(gotTasks);
})

router.post('/createTask', async (request, response) => {
    const { task, id } = request.body;
    const createdTask = await createTask(task, id);
    response.status(200).send(createdTask);
})

router.patch('/updateTask', async (request, response) => {
    const { task, tasknumber, id } = request.body;
    const updatedTask = await updateTask(task, tasknumber, id);
    response.status(200).send(updatedTask);
})

router.delete('/deleteTask', async (request, response) => {
    const { tasknumber, id } = request.body;
    const deletedTask = await deleteTask(tasknumber, id);
    response.status(200).send(deletedTask);
})

module.exports = router;