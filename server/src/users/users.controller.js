const express = require("express");
const router = express.Router();
const { findUser, createUser, getUserData, updateName, updateEmail, updatePass } = require("./users.service");

router.post("/login", async (request, response) => {
    const { email, password } = request.body;
    const findedUser = await findUser(email, password);
    response.status(200).send(findedUser);
})

router.post("/register", async (request, response) => {
    const { name, email, password } = request.body;
    const createdUser = await createUser(name, email, password);
    response.status(200).send(createdUser);
})

router.get("/getData/:id", async (request, response) => {
    const { id } = request.params;
    const gotUserData = await getUserData(id);
    response.status(200).send(gotUserData);
})

router.patch("/updateName/:id", async (request, response) => {
    const { id } = request.params;
    const { name } = request.body;
    const updatedName = await updateName(id, name);
    response.status(200).send(updatedName)
})

router.patch("/updateEmail/:id", async (request, response) => {
    const { id } = request.params;
    const { email } = request.body;
    const updatedEmail = await updateEmail(id, email);
    response.status(200).send(updatedEmail)
})

router.patch("/updatePass/:id", async (request, response) => {
    const { id } = request.params;
    const { pass } = request.body;
    const updatedPass = await updatePass(id, pass);
    response.status(200).send(updatedPass)
})



module.exports = router;