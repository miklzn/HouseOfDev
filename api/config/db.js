const Sequelize = require("sequelize");
const db = new Sequelize("houseofdev", "postgres", "1980", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
