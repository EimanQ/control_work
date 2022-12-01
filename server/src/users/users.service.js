const {
    json
} = require("express");
const {
    findUserDB, createUserDB
} = require("./users.repository");

const findUser = async (email, password) => {
    try {
        const findedUserDB = await findUserDB(email, password);
        console.log(findedUserDB);
        if (!Array.isArray(findedUserDB)) throw new Error(findedUserDB)
        return JSON.stringify([true, findedUserDB])
    } catch (error) {
        return JSON.stringify(false);
    }
}

const createUser = async (name, email, password) => {
    try {
        const createdUserDB = await createUserDB(name, email, password);
        if (!Array.isArray(createdUserDB)) throw new Error(createdUserDB);
        return JSON.stringify([true, createdUserDB])
    } catch (error) {
        return JSON.stringify(false);
    }
};

module.exports = {
    createUser, findUser
};