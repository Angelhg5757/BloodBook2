const Publicacion = require('../models/publicacion.model');

exports.findAll = (req, res) => {
    // const nombre = req.query.nombre;
    // var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    Publicacion.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al recuperar los datos"
            });
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