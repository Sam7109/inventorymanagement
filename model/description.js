const { DataTypes } = require("sequelize"); // Import DataTypes from sequelize
const sequelize = require("../utils/sequelize"); // Import your configured Sequelize instance

const Product = sequelize.define("inventory", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  itemname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Product;
