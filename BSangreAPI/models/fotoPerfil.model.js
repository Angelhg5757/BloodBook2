const sql = require("./db.js");

const FotoPerfil = function (fotoPerfil) {
  this.idFoto = fotoPerfil.idFoto;
  this.urlFoto = fotoPerfil.urlFoto;
};

FotoPerfil.getAll = (result) => {
  let query = 'SELECT * FROM "FotoPerfil"';

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("FotoPerfil: ", res);
    result(null, res);
  });
};

module.exports = FotoPerfil;