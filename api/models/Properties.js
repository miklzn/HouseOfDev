const S = require("sequelize");
const db = require("../config/db");

class Properties extends S.Model {}

Properties.init(
  {
    title: {
      type: S.STRING,
      allowNull: false,
    },
    adress: {
      type: S.STRING,
      allowNull: false,
    },
    city: {
      type: S.STRING,
      allowNull: false,
    },
    country: {
      type: S.STRING,
      allowNull: false,
    },
    state: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    available: {
      type: S.BOOLEAN,
    },
    garage: {
      type: S.INTEGER,
    },
    rooms: {
      type: S.INTEGER,
    },
    bathrooms: {
      type: S.INTEGER,
    },
    environments: {
      type: S.INTEGER,
    },
    category: {
      type: S.STRING,
      allowNull: false,
    },
    operation: {
      type: S.STRING,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    image: {
      type: S.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "property",
  }
);

module.exports = Properties;
