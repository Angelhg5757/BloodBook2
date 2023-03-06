const Redes = require("../models/redes.model");
//listar
exports.listar = (req, res) => {
  Redes.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error al listar los redes",
      });
    } else {
      res.status(200).send(data);
    }
  });
};
//crear
exports.create = (req, res) => {
  if (!req.body) {
    res.status(404).send({
      message: "No puede estar vacia la peticion",
    });
  }

  //Crear persona
  const newRedes = new Redes({
    idRedes: req.body.idRedes,
    nombreRed: req.body.nombreRed,
  });

  Redes.create(newRedes, (err, data) => {
    if (err)
      res.status(500).json({
        message: err.message || "Error al crear la Red Social.",
      });
    else res.status(200).json(data);
  });
};
//Actualizar
exports.actualizar = (req, res) => {
  Redes.update(req, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error al actualizar el redes",
      });
    } else {
      res.status(200).send(data);
    }
  });
};
//borrar
exports.borrar = (req, res) => {
  Redes.delete(req, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error al borrar el redes",
      });
    } else {
      res.status(200).send(data);
    }
  });
};
