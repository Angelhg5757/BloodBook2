const sql = require("./db.js");

const Imagen = function (imagen) {
  this.idImagen = imagen.id;
  this.urlImagen = imagen.urlImagen;
};

Imagen.getAll = (result) => {
  let query = 'SELECT * FROM "Imagen"';

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("Imagen: ", res);
    result(null, res);
  });
};

module.exports = Imagen;

// module.exports = (sequelize, Sequelize) => {
//   const Imagen = sequelize.define("Imagen", {
//     // idImagen: {
//     //   type: Sequelize.INTEGER,
//     //   primaryKey: true,
//     //   autoIncrement: true,
//     // },
//     urlImagen: {
//       type: Sequelize.STRING,
//     }
//   });

//   return Imagen;
// };
