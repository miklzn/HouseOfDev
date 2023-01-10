const express = require("express");
const router = express.Router();

const users = require("./users");
const properties = require("./properties");
const appointments = require("./appointments");

router.use("/users", users);
router.use("/properties", properties);
router.use("/appointments", appointments);

module.exports = router;
