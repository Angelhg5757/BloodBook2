const Imagen = require("../models/imagen.model");
//Listar imagenes
exports.list = (req, res)=>{
    Imagen.getAll((err, data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "Error al recuperar los datos",
            });
        else{
            console.log(`Imagen.list $(data)`);
            res.status(200).json(data);
        }
    });
};
//Crear imagen
exports.crear = (req, res)=>{
    Imagen.create(req,(err, data)=>{
        if(err)
        res.status(500).send({
            message: err.message || "Error al crear la imagen"
        });
        else
            res.status(200).json(data);
    });
};
//Eliminar imagen
exports.eliminar = (req, res)=>{
    Imagen.delete(req,(err, data)=>{
        if(err)
        res.status(500).send({
            message: err.message || "Error al eliminar la imagen"
        });
        else 
            res.status(200).json(data);
    });
};
//Actualizar imagen
exports.actualizar = (req, res)=>{
    Imagen.update(req,(err, data)=>{
        if(err)
        res.status(500).send({
            message: err.message || "Error al actualizar la imagen"
        });
        else 
        res.status(200).json(data);
    });
};


// const db = require("../models/db");
// const Imagen = db.Imagen;
// const Op = db.Sequelize.Op;

// exports.findAll = (req, res) => {
//     Imagen.findAll()
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Ocurrio un error al recuperar todos los Roles."
//             });
//         });
// };