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
//Crear
// Usuario.create = (usuario, result) => {
//   sql.query(
//     'SELECT "idUsuario" FROM "Usuario" ORDER BY "idUsuario" DESC LIMIT 1',
//     (err, res) => {
//       if (err) {
//         throw err;
//       }

//       const ultimoId = res.rows[0].id;
//       const nuevoId = ultimoId + 1;

//       const hashedPassword = bcrypt.hashSync(usuario.password, 10);
//       const active = true;

//       sql.query(
//         'INSERT INTO "Usuario" ("idUsuario", "nombre", "apePat", "apeMat", "correo", "password", "fechaNac", \
//         "isActive", "idRoles", "idSangre", "sexo") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
//         [
//           nuevoId,
//           usuario.nombre,
//           usuario.apePat,
//           usuario.apeMat,
//           usuario.correo,
//           hashedPassword,
//           usuario.fechaNac,
//           active,
//           usuario.idRoles,
//           usuario.idSangre,
//           usuario.sexo,
//         ],
//         (err, res) => {
//           if (err) {
//             throw err;
//           }
//           console.log("Row created usuario: ", {
//             id: result.insertId,
//             ...usuario,
//           });
//           console.log("Row created usuario: ", {
//             id: result.insertId,
//             ...usuario,
//           });
//           result(null, { id: result.insertId, ...usuario });
//         }
//       );
//     }
//   );
// };

Usuario.create = (usuario, result) => {
  const text =
    'INSERT INTO "Usuario" ("nombre", "apePat", "apeMat", "correo", "password", "fechaNac", \
  "isActive", "idRoles", "idSangre", "sexo") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
  const hashedPassword = bcrypt.hashSync(usuario.password, 10);
  const active = true;

  const values = [
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
  ];
  sql.query(text, values, (err, res) => {
    if (err) {
      console.log("Error al crear el usuario: ", err);
      result(err, null);
      return;
    }
    console.log("Usuario guardado!", res);
    result(null, res);
  });
};

//Obtener
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
//Obtener por id
Usuario.getById = (req, result) => {
  const id = req.params.id;

  sql.query('SELECT * FROM "Usuario" WHERE "idUsuario" = $1', [id], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("Usuario: ", res);
    result(null, res);
  });
};
//Actualizar
Usuario.update = (req, result) => {
  const id = parseInt(req.params.id);
  const { nombre, apePat, apeMat, correo, password, fechaNac, isActive, idRoles, idSangre, sexo } = req.body;

  sql.query(
    'UPDATE "Usuario" SET "nombre" = $1, "apePat" = $2, "apeMat" = $3, "correo" = $4, "password" = $5, "fechaNac" = $6, "isActive" = $7, "idRoles" = $8, "idSangre" = $9, "sexo" = $10 WHERE "idUsuario" = $11',
    [nombre, apePat, apeMat, correo, password, fechaNac, isActive, idRoles, idSangre, sexo, id],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }
      console.log("Usuario: ", res);
      result(null, res);
    }
  );
};

Usuario.updateStatus = (req, result) => {
  const id = parseInt(req.params.id);
  const estado = false;

  sql.query(
    'UPDATE "Usuario" SET "isActive" = $1 WHERE "idUsuario" = $2',
    [estado, id],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }
      console.log("Usuario: ", res);
      result(null, res);
    }
  );
};
//Actualizar conforme al periodo de donación
// Usuario.updateStatus2 = (req, result) => {
//   const id = parseInt(req.params.id);
//   const estado = true;

//   sql.query(
//     'UPDATE "Usuario" SET "isActive" = $1 WHERE "idUsuario" = $2',
//     [estado, id],
//     (err, res) => {
//       if (err) {
//         console.log("Error: ", err);
//         result(err, null);
//         return;
//       }
//       console.log("Usuario: ", res);
//       result(null, res);
//     }
//   );
// };

//Eliminar
Usuario.delete = (req, result) => {
  const id = req.params.id;

  sql.query('DELETE FROM "Usuario" WHERE "idUsuario" = $1', [id], (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};
//Obtener usuario por correo y password
// Usuario.getUserByEmailAndPassword = async (email, password) => {
//   const query =
//     'SELECT id FROM "Usuarios" WHERE correo = $1 AND password = crypt($2, password)';
//   const values = [email, password];
//   try {
//     const result = await sql.query(query, values);
//     if (result.rows.length === 1) {
//       return result.rows[0].id;
//     }
//     return null;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

module.exports = Usuario;
