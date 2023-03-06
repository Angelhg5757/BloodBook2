// const { DataTypes } = require('sequelize');
// const sequelize = require('../models/db');

// module.exports = (sequelize, Sequelize) => {
//   const Publicaciones = sequelize.define("Publicaciones", {
//       // idPublicaciones: {
//       //   type: Sequelize.INTEGER,
//       //   primaryKey: true,
//       //   autoIncrement: true
//       // },
//       fechaPublicacion: {
//         type: Sequelize.DATEONLY,
//         primaryKey: true,
//         allowNull: false
//       },
//       titulo: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       descripcion: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       isActive: {
//         type: Sequelize.BOOLEAN,
//         allowNull: false,
//         defaultValue: true
//       },
//       idImagen: {
//         type: Sequelize.INTEGER,
//       },
//       idUsuario: {
//         type: Sequelize.INTEGER,
//       }
//   });

//   return Publicaciones;
// };

// module.exports = (sequelize, Sequelize) => {
//   const Publicacion = sequelize.define("Publicaciones", {
//     idPublicaciones: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     fechaPublicacion: {
//       type: DataTypes.DATEONLY,
//       primaryKey: true,
//       allowNull: false
//     },
//     titulo: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     descripcion: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     isActive: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: true
//     },
//     idImagen: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     idUsuario: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     }
//   })
//   return Publicacion;
// };


const sql = require("./db.js");
//constructor
const Publicacion = function (publicacion) {
  this.idPublicaciones = publicacion.idPublicaciones;
  this.fechaPublicacion = publicacion.fechaPublicacion;
  this.titulo = publicacion.titulo;
  this.descripcion = publicacion.descripcion;
  this.isActive = publicacion.isActive;
  this.idImagen = publicacion.idImagen;
  this.idUsuario = publicacion.idUsuario;
};
//Listar Publicaciones
Publicacion.getAll = (result) => {
  let query = 'SELECT * FROM "Publicaciones"';

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("publicacion: ", res);
    result(null, res);
  });
};
//Crear Publicaciones
Publicacion.create = (publicacion, result) => {
  const query = 'INSERT INTO "Publicaciones" ("fechaPublicacion", "titulo", "descripcion","isActive","idImagen","idUsuario") VALUES ($1, $2, $3, $4,$5,$6)';
  const values = [publicacion.fechaPublicacion, publicacion.titulo, publicacion.descripcion,publicacion.isActive, publicacion.idImagen, publicacion.idUsuario];
  sql.query(query, values, (err, res) => {
    if(err) {
      console.log("Error al crear publicación: ", err);
      result(err, null);
      return;
    }
    console.log("Publicacion creada con éxito: ", res);
    result(null, res);
  });
};
//Eliminar Publicaciones
Publicacion.delete = (publicacion, result) => {
  const query = 'DELETE FROM "Publicaciones" WHERE "idPublicaciones" = $1';
  const values = [publicacion.idPublicaciones];
  sql.query(query, values, (err, res) => {
    if(err) {
      console.log("Error al eliminar publicación: ", err);
      result(err, null);
      return;
    }
    console.log("Publicación eliminada con éxito: ", res);
    result(null, res);
  });
};
//Actualizar Publicaciones
Publicacion.update = (publicacion, result) => {
  const query = 'UPDATE "Publicaciones" SET "fechaPublicacion" = $1, "titulo" = $2, "descripcion" = $3, "isActive" = $4, "idImagen" = $5, "idUsuario" = $6 WHERE "idPublicaciones" = $7';
  const values = [publicacion.fechaPublicacion, publicacion.titulo, publicacion.descripcion, publicacion.isActive, publicacion.idImagen, publicacion.idUsuario];
  sql.query(query, values, (err, res) => {
    if (err){
      console.log("Error al actualizar publicación: ", err);
      result(err, null);
      return;
    }
    console.log("Publicación actualizada con éxito: ", res);
    result(null, res);
  });
};
module.exports = Publicacion;

// Publicacion.create = (publicacion, result) => {
//   sql.query(
//     "SELECT id FROM Publicaciones ORDER BY id DESC LIMIT 1",
//     (err, res) => {
//       if (err) {
//         throw err;
//       }

//       const ultimoId = res.rows[0].id;
//       const nuevoId = ultimoId + 1;

//       const fechaActual = new Date();
//       const estado = true;
//       //const idUsuarioActual = localStorage.getItem('idUsuario'); //Al iniciar sesion guardar el idUsuario


//       // Insertar el nuevo registro con el nuevo id
//       sql.query(
//         "INSERT INTO Publicaciones (idPublicaciones, fechaPublicacion, titulo, descripcion, isActive, idImagen, idUsuario) VALUES ($1, $2, $3, $4, $5, $6, $7)",
//         [
//           nuevoId,
//           fechaActual,
//           publicacion.titulo,
//           publicacion.descripcion,
//           estado,
//           publicacion.idUsuario,
//         ],
//         (err, res) => {
//           if (err) {
//             throw err;
//           }
//           console.log("Row created publicacion: ", {
//             id: result.insertId,
//             ...publicacion,
//           });
//           console.log("Row created Publicacion: ", {
//             id: result.insertId,
//             ...publicacion,
//           });
//           result(null, { id: result.insertId, ...publicacion });
//         }
//       );
//     }
//   );
// };



// Publicacion.getById = (req, result) => {
//   const id = req.params.id;

//   sql.query("SELECT * FROM Publicaciones WHERE id = $1", [id], (err, res) => {
//     if (err) {
//       console.log("Error: ", err);
//       result(err, null);
//       return;
//     }
//     console.log("publicacion: ", res);
//     result(null, res);
//   });
// };

// // Publicacion.update = (req, result) => {
// //   const id = parseInt(req.params.id);
// //   const { titulo, contenido, fecha_creacion, id_persona } = req.body;

// //   sql.query(
// //     "UPDATE publicacion SET titulo = $1, contenido = $2, fecha_creacion = $3, id_persona = $4 WHERE id = $5",
// //     [titulo, contenido, fecha_creacion, id_persona, id],
// //     (err, res) => {
// //       if (err) {
// //         console.log("Error: ", err);
// //         result(err, null);
// //         return;
// //       }
// //       console.log("publicacion: ", res);
// //       result(null, res);
// //     }
// //   );
// // };

// Publicacion.delete = (req, result) => {
//   const id = req.params.id;

//   sql.query("DELETE FROM Publicaciones WHERE id = $1", [id], (err, res) => {
//     if (err) {
//       console.log("Error: ", err);
//       result(err, null);
//       return;
//     }
//     result(null, res);
//   });
// };
