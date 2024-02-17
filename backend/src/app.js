const path = require("path");
const strategiesRouter = require("./strategies/strategies.router");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("Express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/strategies", strategiesRouter);

module.exports = app;