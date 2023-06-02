const dotenv = require("dotenv");
dotenv.config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DBURL);
dotenv.config();

module.exports = { sequelize };
