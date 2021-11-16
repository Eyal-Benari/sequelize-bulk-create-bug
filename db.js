const { Sequelize } = require("sequelize");
const { database } = require("./sequelizeConfig");

const db = new Sequelize(database);

module.exports = db;
