const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

//http://localhost:3001/api/users/register

router.post("/register", (req, res) => {
  Users.create(req.body).then((user) => {
    res.send(user);
  });
});

module.exports = router;
