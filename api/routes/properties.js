const express = require("express");
const router = express.Router();
const Properties = require("../models/Properties");
const { validateAdmin, validateAuth } = require("../middlewares/auth");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

//http://localhost:3001/api/properties/create

router.post("/create", validateAdmin, (req, res) => {
  Properties.create(req.body).then((property) => {
    res.status(201).send(property);
  });
});

//http://localhost:3001/api/properties/change/:id

router.put("/change/:id", validateAdmin, (req, res) => {
  const id = req.params.id;
  Properties.findByPk(id)
    .then((property) => property.update(req.body))
    .then((propertyUpdated) => res.status(201).send(propertyUpdated))
    .catch((err) => res.status(400).send(err));
});

//http://localhost:3001/api/properties/:id

router.delete("/:id", validateAdmin, (req, res) => {
  const id = req.params.id;
  Properties.destroy({ where: { id } })
    .then(() => res.status(204).send("Propiedad eliminada"))
    .catch((err) => res.status(400).send(err));
});

//http://localhost:3001/api/properties/all

router.get("/all", (req, res) => {
  Properties.findAll().then((property) => {
    res.status(200).send(property);
  });
});

//http://localhost:3001/api/properties/:id

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Properties.findOne({ where: { id } }).then((property) => {
    res.status(200).send(property);
  });
});

//BUSCADOR
//http://localhost:3001/api/properties/search/:title

router.get("/search/:title", (req, res) => {
  const { title } = req.params;
  const lower = title.toLowerCase();
  Properties.findAll({
    where: {
      title: { [Op.iLike]: `%${lower}%` },
    },
  }).then((search) => {
    res.send(search);
  });
});

//FILTRO POR AMBIENTES
//http://localhost:3001/api/properties/filter/:environments

router.get("/environments/:environments", (req, res) => {
  const { environments } = req.params;
  Properties.findAll({ where: { environments: environments } })
    .then((filter) => {
      res.send(filter);
    })
    .catch((error) => console.log(error));
});

//FILTRO POR PRECIO
//http://localhost:3001/api/properties/filter

router.post("/price", (req, res) => {
  const { minimo, maximo } = req.body;
  Properties.findAll({ where: { price: { [Op.between]: [minimo, maximo] } } })
    .then((filter) => {
      console.log(filter);
      res.send(filter);
    })
    .catch((error) => console.log(error));
});

//AGREGAR A FAVORITOS
//http://localhost:3001/api/properties/addFavorites

router.post("/addFavorites", validateAuth, (req, res) => {
  const { id } = req.body;
  Properties.findByPk(id)
    .then((property) => {
      property.setUsers(req.user.id);
      res.status(201).send(property);
    })
    .catch((error) => console.log(error));
});

//ELIMINAR DE FAVORITOS
//http://localhost:3001/api/properties/deleteFavorites/:id

router.post("/deleteFavorites/:id", validateAuth, (req, res) => {
  const { id } = req.params;
  Properties.findByPk(id)
    .then((property) => {
      property.removeUsers(req.user.id);
      res.status(204).send(property);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
