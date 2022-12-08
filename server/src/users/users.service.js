const { json } = require("express");
const { findUserDB, createUserDB, updateNameDB } = require("./users.repository");

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

const updateName = async (id, name) => {
    try {
        const updatedNameDB = await updateNameDB(id, name);
        if (!Array.isArray(updatedNameDB)) throw new Error(updatedNameDB);
        return JSON.stringify(true)
    } catch (error) {
        return JSON.stringify(false);
    }
}

const updateEmail = async (id, email) => {
    try {
        const updateEmailDB = await updateEmailDB(id, email);
        if (!Array.isArray(updateEmailDB)) throw new Error(updateEmailDB);
        return JSON.stringify(true)
    } catch (error) {
        return JSON.stringify(false);
    }
}
const updatePass = async (id, pass) => {
    try {
        const updatePassDB = await updatePassDB(id, pass);
        if (!Array.isArray(updatePassDB)) throw new Error(updatePassDB);
        return JSON.stringify(true)
    } catch (error) {
        return JSON.stringify(false);
    }
}

module.exports = { createUser, findUser, updateName, updateEmail, updatePass};