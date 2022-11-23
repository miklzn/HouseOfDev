const express = require("express");
const { generateToken } = require("../config/token");
const router = express.Router();
const Users = require("../models/Users");

//http://localhost:3001/api/users/register

router.post("/register", (req, res) => {
  Users.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

//http://localhost:3001/api/users/login

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  Users.findOne({
    where: { email },
  }).then((user) => {
    if (!user) return res.sendStatus(401);

    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        name: user.name,
        lastName: user.lastName,
      };

      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
});

module.exports = router;
