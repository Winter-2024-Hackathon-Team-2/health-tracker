const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const app = express();
const historyRouter = require("./history/history.router");
const usersRouter = require("./users/users.router");
app.use(cors());
app.use(express.json());
app.use("/track", historyRouter);
app.use("/users", usersRouter);
app.use(errorHandler);
app.use(notFound);
module.exports = app;
