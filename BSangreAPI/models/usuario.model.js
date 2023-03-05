const sql = require("./db.js");
const bcrypt = require("bcrypt");
//constructor
const Usuario = function (usuario) {
  //this.id = usuario.id;
  this.nombre = usuario.nombre;
  this.apePat = usuario.apePat;
  this.apeMat = usuario.apeMat;
  this.correo = usuario.correo;
  this.password = usuario.password;
  this.fechaNac = usuario.fechaNac;
  this.isActive = usuario.isActive;
  this.idRoles = usuario.idRoles;
  this.idSangre = usuario.idSangre;
  this.sexo = usuario.sexo;
};

Usuario.create = (usuario, result) => {
  sql.query("SELECT id FROM Usuario ORDER BY id DESC LIMIT 1", (err, res) => {
    if (err) {
      throw err;
    }

    const ultimoId = res.rows[0].id;
    const nuevoId = ultimoId + 1;

    const hashedPassword = bcrypt.hashSync(usuario.password, 10);
    const active = true;

    sql.query(
      "INSERT INTO Usuario (idUsuario, nombre, apePat, apeMat, correo, password, fechaNac, \
        isActive, idRoles, idSangre, sexo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
      [
        nuevoId,
        usuario.nombre,
        usuario.apePat,
        usuario.apeMat,
        usuario.correo,
        hashedPassword,
        usuario.fechaNac,
        active,
        usuario.idRoles,
        usuario.idSangre,
        usuario.sexo,
      ],
      (err, res) => {
        if (err) {
          throw err;
        }
        console.log("Row created usuario: ", {
          id: result.insertId,
          ...usuario,
        });
        console.log("Row created usuario: ", {
          id: result.insertId,
          ...usuario,
        });
        result(null, { id: result.insertId, ...usuario });
      }
    );
  });
};

Usuario.getAll = (result) => {
  let query = 'SELECT * FROM "Usuario"';

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }

    console.log("usuario: ", res);
    result(null, res);
  });
};

Usuario.getById = (req, result) => {
  const id = req.params.id;

  sql.query("SELECT * FROM usuario WHERE id = $1", [id], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("usuario: ", res);
    result(null, res);
  });
};

Usuario.update = (req, result) => {
  const id = parseInt(req.params.id);
  const { nombre, email, url_avatar } = req.body;

  sql.query(
    "UPDATE usuario SET nombre = $1, email = $2, url_avatar = $3 WHERE id = $4",
    [nombre, email, url_avatar, id],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }
      console.log("usuario: ", res);
      result(null, res);
    }
  );
};

Usuario.delete = (req, result) => {
  const id = req.params.id;

  sql.query("DELETE FROM usuario WHERE id = $1", [id], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Usuario.getUserByEmailAndPassword = async (email, password) => {
  const query =
    "SELECT id FROM Usuarios WHERE correo = $1 AND password = crypt($2, password)";
  const values = [email, password];
  try {
    const result = await sql.query(query, values);
    if (result.rows.length === 1) {
      return result.rows[0].id;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = Usuario;