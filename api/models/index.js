//Aca iran las relaciones de las tablas.

const Users = require("./Users");
const Properties = require("./Properties");
const Appointments = require("./Appointments");

Properties.belongsToMany(Users, { through: "favorites" });
Users.belongsToMany(Properties, { through: "favorites" });

Users.hasMany(Appointments, { foreignKey: "userId" });
Appointments.belongsTo(Users);
Properties.hasMany(Appointments, { foreignKey: "propertyId" });
Appointments.belongsTo(Properties);

// module.exports = { Users, Properties, Appointments };
