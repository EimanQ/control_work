const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("./users/users.controller");
const tasks = require("./tasks/tasks.contoller");
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/users", users);

app.use("/tasks", tasks);

app.use((error, request, response, next) => {
    response.status(500).send(error.message);
});


module.exports = app;