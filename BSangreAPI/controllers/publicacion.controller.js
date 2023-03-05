const Publicacion = require('../models/publicacion.model');
// const db = require("../models/db");
// const config = require("../config/db.config");
// const express = require("express");

// const Publicacion = db.Publicaciones;
// const app = express();
// app.set("llave", config.llave);

// exports.findAll = (req, res) => {
//   Publicacion.findAll({
//     include: [
//       {
//         model: db.Imagen,
//       }],
//   })
//     .then(publicaciones => {
//       res.status(200).send(publicaciones);
//     })
//     .catch(err => {
//       res.status(500).send({
//         mensaje:
//           err.message || "Ocurrio un error al recuperar todos los Usuario."
//       });
//     });
// };

exports.list = (req, res)=>{
  Publicacion.getAll((err, data)=>{
      if(err)
          res.status(500).send({
              message: err.message || "Error al recuperar los datos",
          });
      else{
          console.log(`Publicacion.list $(data)`);
          res.status(200).json(data);
      }
  });
};

// exports.getPublicaciones = (req, res) => {
//   try {
//     const publicaciones = Publicacion.findAll();
//     res.json(publicaciones);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error interno del servidor' });
//   }
// };

// export async function getTasks(req, res) {
//     try {
//       const tasks = await Publicacion.findAll({
//         attributes: ["idPublicaciones", "fechaPublicacion", "titulo", "descripcion", "isActive", "idImagen", "idUsuario"],
//         order: [["idPublicaciones", "DESC"]],
//       });
//       res.json(tasks);
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   }