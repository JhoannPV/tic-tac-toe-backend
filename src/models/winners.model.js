const { sequelize } = require("../database/sequelize.config");
const { DataTypes } = require("sequelize");

const Winner = sequelize.define(
  "winner",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.STRING,
    },
    actualizado: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = { Winner };
