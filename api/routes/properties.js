const express = require("express");
const router = express.Router();
const Properties = require("../models/Properties");
const { validateAdmin } = require("../middlewares/auth");

//http://localhost:3001/api/properties/create

router.post("/create", validateAdmin, (req, res) => {
  Properties.create(req.body).then((property) => {
    res.status(201).send(property);
  });
});

//http://localhost:3001/api/properties/change/:id

router.put("/change/:id", validateAdmin, (req, res) => {
  Properties.findOne(req.body.id).then((property) => {
    res.status(201).send(property);
  });
});

module.exports = router;
