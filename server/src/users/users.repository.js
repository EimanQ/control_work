const { pool } = require("../db");

const findUserDB = async (email, password) => {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);

        const sqlFindUser = `
        SELECT users.id, users.fullname, users.email FROM users
        WHERE users.email = $1 and users.password = $2
        `;

        const result = (await client.query(sqlFindUser, [email, password])).rows;

        await client.query(`COMMIT`);

        return result
    } catch (error) {

        await client.query(`ROLLBACK`);
        return error.message;
        
    }
}

const createUserDB = async (name, email, password) => {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);

        const sqlCreateUser = `
        INSERT INTO users (fullname, email, password)
        VALUES ($1,$2,$3)
        RETURNING users.id, users.fullname, users.email
        `;

        const result = (await client.query(sqlCreateUser, [name, email, password])).rows

        await client.query(`COMMIT`);

        return result
    } catch (error) {

        await client.query(`ROLLBACK`);
        return error.message;

    }
}

const getUserDataDB = async (id) => {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);

        const sqlGetData = `
        SELECT fullname, email FROM users
        WHERE id = $1;
        `

        const result = (await client.query(sqlGetData, [id])).rows;

        await client.query(`COMMIT`)

        return result
    } catch (error) {

        await client.query(`ROLLBACK`);
        return error.message;

    }
}

const updateNameDB = async (id, name) => {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);

        const sqlUpdateName = `
        UPDATE users
        SET fullname = $1
        WHERE id = $2
        `;

        const result = (await client.query(sqlUpdateName, [name, id])).rows;

        await client.query(`COMMIT`);

        return result
    } catch (error) {

        await client.query(`ROLLBACK`);
        return error.message;

    }
}

const updateEmail = async (id, email) => {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);

        const sqlUpdateEmail = `
        UPDATE users
        SET email = $1
        WHERE id = $2
        `;

        const result = (await client.query(sqlUpdateEmail, [email, id])).rows;

        await client.query(`COMMIT`);

        return result
    } catch (error) {

        await client.query(`ROLLBACK`);
        return error.message;

    }
}

const updatePassDB = async (id, pass) => {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);

        const sqlUpdatePass = `
        UPDATE users
        SET password = $1
        WHERE id = $2
        `;

        const result = (await client.query(sqlUpdatePass, [pass, id])).rows;

        await client.query(`COMMIT`);

        return result
    } catch (error) {

        await client.query(`ROLLBACK`);
        return error.message;

    }
}

module.exports = { findUserDB, createUserDB, getUserDataDB, updateNameDB, updateEmail, updatePassDB }