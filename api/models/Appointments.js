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
    userId: {
      type: S.INTEGER,
      allowNull: false,
    },
    propertyId: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "appointment",
  }
);

module.exports = Appointments;
