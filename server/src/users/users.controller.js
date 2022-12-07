const express = require("express");
const router = express.Router();
const { findUser, createUser } = require("./users.service");

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

module.exports = router;