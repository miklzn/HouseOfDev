const express = require("express");
const { validateAuth, validateAdmin } = require("../middlewares/auth");
const router = express.Router();
const Appointments = require("../models/Appointments");

//http://localhost:3001/api/appointments/create

router.post("/create", validateAuth, (req, res) => {
  const { id, name, lastName } = req.user;
  const {
    date,
    time,
    propertyId,
    propertyTitle,
    propertyImage,
    propertyCountry,
    propertyCity,
  } = req.body;

  Appointments.create({
    userId: id,
    userName: name,
    userLastname: lastName,
    propertyId: propertyId,
    propertyTitle: propertyTitle,
    propertyImage: propertyImage,
    propertyCountry: propertyCountry,
    propertyCity: propertyCity,
    date: date,
    time: time,
  })
    .then((appointment) => res.send(appointment))
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
