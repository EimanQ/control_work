const {
    pool
} = require("../db");

const getTasksDB = async (id) => {
    const client = await pool.connect()

    try {
        await client.query(`BEGIN`);

        const getTasksSql = `
        SELECT tasks.id, tasks.task FROM tasks
        JOIN users ON users.id = tasks.user_id
        GROUP BY tasks.id
        HAVING tasks.user_id = $1
        `

        const result = (await client.query(getTasksSql, [id])).rows

        await client.query(`COMMIT`);

        return result
    } catch (error) {
        await client.query(`ROLLBACK`);
    }
}


const createTaskDB = async (task, id) => {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);

        const createTaskSql = `
        INSERT INTO tasks (task, user_id)
        VALUES ($1,$2)
        RETURNING tasks.task, tasks.id`

        const result = (await client.query(createTaskSql, [task, id])).rows

        await client.query(`COMMIT`);

        return result
    } catch (error) {
        await client.query(`ROLLBACK`);
    }
}

const updateTaskDB = async (task, tasknumber, id) => {
    const client = await pool.connect();

    try {
        await client.query(`BEGIN`);

        const updateTaskSql = `
        UPDATE tasks
        SET task = $1
        WHERE id = $2 AND user_id = $3
        `;

        const result = (await client.query(updateTaskSql, [task, tasknumber, id])).rows

        await client.query(`COMMIT`);

        return result;
        
    } catch (error) {

        await client.query(`ROLLBACK`);
        console.log(error.message);
    }
}

const deleteTaskDB = async (tasknumber, id) => {
    const client = await pool.connect();

    console.log(tasknumber, id);

    try {
        await client.query(`BEGIN`);

        const rewriteTaskNameSql = `
        SELECT task FROM tasks
        where id = $1;
        `

        const result = (await client.query(rewriteTaskNameSql, [tasknumber])).rows


        const deleteTaskSql = `
        DELETE FROM tasks
        WHERE id = $1 AND user_id = $2;
        `

        await client.query(deleteTaskSql, [tasknumber, id])

        await client.query(`COMMIT`);

        return result;
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    getTasksDB, createTaskDB, updateTaskDB, deleteTaskDB
}

