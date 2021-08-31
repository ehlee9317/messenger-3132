const Sequelize = require("sequelize");
require("dotenv").config(); // a lightweight npm package that automatically loads environment variables from a .env file into the process.env object

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/messenger",
  {
    logging: false,
  }
);

module.exports = db;
