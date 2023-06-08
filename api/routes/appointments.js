const express = require("express");
const { validateAuth, validateAdmin } = require("../middlewares/auth");
const router = express.Router();
const Appointments = require("../models/Appointments");

//http://localhost:3001/api/appointments/new/:idProperty

router.post("/new/:idProperty", validateAuth, (req, res) => {
  const { id } = req.user;
  const { idProperty } = req.params;
  const { date } = req.body;
  Appointments.create({ userId: id, propertyId: idProperty, date: date })
    .then((date) => res.send(date))
    .catch((error) => console.log(error));
});

//http://localhost:3001/api/appointments/all

router.get("/all", validateAdmin, (req, res) => {
  Appointments.findAll().then((appointments) => {
    res.status(200).send(appointments);
  });
});

//http://localhost:3001/api/appointments/delete/:id

router.delete("/delete/:id", validateAdmin, (req, res) => {
  const id = req.params.id;
  Appointments.destroy({ where: { id } })
    .then(() => res.status(204).send("Deleted appointment"))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
