// const { DataTypes } = require('sequelize');
// const sequelize = require('../models/db');

module.exports = (sequelize, Sequelize) => {
  const Publicacion = sequelize.define("publicaciones", {
      idPublicaciones: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fechaPublicacion: {
        type: Sequelize.DATEONLY,
        primaryKey: true,
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      idImagen: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
  });

  return  Publicacion;
};

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



// //constructor
// const Publicacion = function (publicacion) {
//   this.idPublicaciones = publicacion.idPublicaciones;
//   this.fechaPublicacion = publicacion.fechaPublicacion;
//   this.titulo = publicacion.titulo;
//   this.descripcion = publicacion.descripcion;
//   this.isActive = publicacion.isActive;
//   this.idImagen = publicacion.idImagen;
//   this.idUsuario = publicacion.idUsuario;
// };

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

// Publicacion.getAll = (result) => {
//   let query = "SELECT * FROM Publicaciones";

//   sql.query(query, (err, res) => {
//     if (err) {
//       console.log("Error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("publicacion: ", res);
//     result(null, res);
//   });
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
