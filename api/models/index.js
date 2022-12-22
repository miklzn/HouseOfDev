//Aca iran las relaciones de las tablas.

const Users = require("./Users");
const Properties = require("./Properties");

Properties.belongsToMany(Users, { through: "favorites" });
Users.belongsToMany(Properties, { through: "favorites" });
