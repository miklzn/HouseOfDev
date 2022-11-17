const S = require("sequelize");
const db = require("../config/db");

class Appointment extends S.Model {}

Appointment.init(
  {
    date: {
      type: S.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "appointment",
  }
);

module.exports = Appointment;
