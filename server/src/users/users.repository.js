const {
    pool
} = require("../db");

const findUserDB = async (email, password) => {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);

        const sqlFindUser = `
        SELECT users.id FROM users
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
        RETURNING users.id
        `;

        const result = (await client.query(sqlCreateUser, [name, email, password])).rows

        await client.query(`COMMIT`);

        return result
    } catch (error) {
        await client.query(`ROLLBACK`);
        return error.message;
    }
}

module.exports = {
    findUserDB, createUserDB
}