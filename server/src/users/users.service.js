const { json } = require("express");
const { findUserDB, createUserDB, getUserDataDB, updateNameDB, updateEmailDB, updatePassDB } = require("./users.repository");

const findUser = async (email, password) => {
    try {
        const findedUserDB = await findUserDB(email, password);
        if (!Array.isArray(findedUserDB)) throw new Error(findedUserDB);
        return JSON.stringify([true, findedUserDB]);
    } catch (error) {
        return JSON.stringify([false, error.message]);
    }
}

const createUser = async (name, email, password) => {
    try {
        const createdUserDB = await createUserDB(name, email, password);
        if (!Array.isArray(createdUserDB)) throw new Error(createdUserDB);
        return JSON.stringify([true, createdUserDB]);
    } catch (error) {
        return JSON.stringify([false, error.message]);
    }
};

const getUserData = async (id) => {
    try {
        const gotUserDataDB = await getUserDataDB(id);
        if (!Array.isArray(gotUserDataDB)) throw new Error(gotUserDataDB);
        return JSON.stringify([true, gotUserDataDB]);
    } catch (error) {
        return JSON.stringify(false);
    }
}

const updateName = async (id, name) => {
    try {
        const updatedNameDB = await updateNameDB(id, name);
        if (!Array.isArray(updatedNameDB)) throw new Error(updatedNameDB);
        return JSON.stringify(true);
    } catch (error) {
        return JSON.stringify(false);
    }
}

const updateEmail = async (id, email) => {
    try {
        const updatedEmailDB = await updateEmailDB(id, email);
        if (!Array.isArray(updatedEmailDB)) throw new Error(updatedEmailDB);
        return JSON.stringify(true);
    } catch (error) {
        return JSON.stringify(false);
    }
}
const updatePass = async (id, pass) => {
    try {
        const updatedPassDB = await updatePassDB(id, pass);
        if (!Array.isArray(updatedPassDB)) throw new Error(updatedPassDB);
        return JSON.stringify(true);
    } catch (error) {
        return JSON.stringify(false);
    }
}

module.exports = { createUser, findUser, getUserData, updateName, updateEmail, updatePass }