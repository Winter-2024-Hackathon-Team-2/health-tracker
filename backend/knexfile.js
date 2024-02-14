require("dotenv").config();
const path = require("path");

const {
  DATABASE_URL = "postgres://akafmgcq:29Zd3e6PnwynqFX0mD6df3e7zoXhO5Ja@bubble.db.elephantsql.com/akafmgcq",
  DATABASE_URL_DEVELOPMENT = "postgres://ytvhrmhk:fnxeND9McOI21nRtdL84xPfZ5uA-5L65@bubble.db.elephantsql.com/ytvhrmhk",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    }
  },
};
