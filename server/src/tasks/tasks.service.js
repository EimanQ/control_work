const {
    json
} = require("express");
const { getTasksDB, createTaskDB, updateTaskDB, deleteTaskDB } = require("./tasks.repository");

const getTasks = async (id) => {
    try {
        const gotTasksDB = await getTasksDB(id);
        if (!Array.isArray(gotTasksDB)) throw new Error(`Something is wrong`);
        return gotTasksDB
    } catch (error) {
        return JSON.stringify(false, error.message);
    }
}

const createTask = async (task, id) => {
    try {
        const createdTaskDB = await createTaskDB(task, id);
        if (!Array.isArray(createdTaskDB)) throw new Error(`Something is wrong`);
        return [JSON.stringify(true)];
    } catch (error) {
        return JSON.stringify(false, error.message);
    }
}

const updateTask = async (task, tasknumber, id) => {
    try {
        const updatedTaskDB = await updateTaskDB(task, tasknumber, id);
        console.log(`Обновление`,updatedTaskDB);
        if (!Array.isArray(updatedTaskDB)) throw new Error(`Something is wrong`);
        return [JSON.stringify(true)];
    } catch (error) {
        return JSON.stringify(false, error.message);
    }
}

const deleteTask = async (tasknumber, id) => {
    try {
        const deletedTask = await deleteTaskDB(tasknumber, id)
        console.log(`удаление`,deletedTask);
        if (!Array.isArray(deletedTask)) throw new Error(`Something is wrong`);
        return [JSON.stringify(true)];
    } catch (error) {
        return JSON.stringify(false, error.message);
    }
}


module.exports = { getTasks, createTask, updateTask, deleteTask };    