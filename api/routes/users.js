const express = require("express");
const { generateToken } = require("../config/token");
const { validateAuth, validateAdmin } = require("../middlewares/auth");
const router = express.Router();
const Users = require("../models/Users");
const Properties = require("../models/Properties");

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
        id: user.id,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        admin: user.admin,
      };

      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
});

//http://localhost:3001/api/users/me

router.get("/me", validateAuth, (req, res) => {
  Users.findByPk(req.user.id, { include: Properties }).then((user) => {
    res.send(user);
  });
});

//http://localhost:3001/api/users/logout

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

//http://localhost:3001/api/users/allUsers

router.get("/allUsers", validateAdmin, (req, res) => {
  Users.findAll().then((users) => {
    res.status(200).send(users);
  });
});

//http://localhost:3001/api/users/delete/:id

router.delete("/delete/:id", validateAdmin, (req, res) => {
  const id = req.params.id;
  Users.destroy({ where: { id } })
    .then(() => res.status(204).send("Deleted User"))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
