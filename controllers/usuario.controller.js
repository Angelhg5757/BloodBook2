const Usuario = require("../models/usuario.model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(404).send({
      message: "No puede estar vacia la peticion",
    });
  }

  //Crear persona
  const newUsuario = new Usuario({
    id: req.body.id,
    nombre: req.body.nombre,
    apePat: req.body.apePat,
    apeMat: req.body.apeMat,
    correo: req.body.correo || "test@gmail.com",
    password: req.body.password,
    fechaNac: req.body.fechaNac,
    isActive: req.body.isActive,
    idRoles: req.body.idRoles,
    idSangre: req.body.idSangre,
    sexo: req.body.sexo,
  });

  Usuario.create(newUsuario, (err, data) => {
    if (err)
      res.status(500).json({
        message: err.message || "Error al crear un Usuario.",
      });
    else res.status(200).json(data);
  });
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  const userId = await Usuario.getUserByEmailAndPassword(email, password);
  if (userId) {
    res.json({ success: true, userId });
  } else {
    res.json({ success: false });
  }
};