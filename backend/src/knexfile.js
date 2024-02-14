require('dotenv').config();
const path = require("path");

const {DATABASE_URL} = process.env;

module.exports = {
    development: {
        client: "postgresql",
        connection: DATABASE_URL,
    }
}