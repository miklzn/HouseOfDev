const S = require("sequelize");
const db = require("../config/db");

class Appointments extends S.Model {}

Appointments.init(
  {
    id: {
      type: S.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: S.TEXT,
      allowNull: false,
    },
    time: {
      type: S.TEXT,
      allowNull: false,
    },
    userId: {
      type: S.INTEGER,
      allowNull: false,
    },
    userName: {
      type: S.TEXT,
      allowNull: false,
    },
    userLastname: {
      type: S.TEXT,
      allowNull: false,
    },
    propertyId: {
      type: S.INTEGER,
      allowNull: false,
    },
    propertyTitle: {
      type: S.TEXT,
      allowNull: false,
    },
    propertyImage: {
      type: S.TEXT,
      allowNull: false,
    },
    propertyCountry: {
      type: S.TEXT,
      allowNull: false,
    },
    propertyCity: {
      type: S.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "appointment",
  }
);

module.exports = Appointments;
