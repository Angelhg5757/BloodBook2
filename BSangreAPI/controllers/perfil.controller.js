const Perfil = require('../models/perfil.model');
//listar
exports.listar = (req, res) => {
    Perfil.getAll((err, perfil) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error al listar perfil"
            });
        }else{
            console.log(perfil);
            res.status(200).send(data);
        }
    });
};
//Crear
exports.crear = (req, res) => {
    Perfil.create(req, (err, perfil) => {
        if(err){
            res.status(500).send({
                message: err.message || "Error al crear perfil"
        })
    }else{
        console.log(perfil);
        res.status(200).send(data);
    }
    });
};
//Actualizar
exports.actualizar = (req, res) => {
    Perfil.update(req, (err, perfil) => {
        if(err){
            res.status(500).send({
                message: err.message || "Error al actualizar perfil"
            })
        }else{
            console.log(perfil);
            res.status(200).send(data);
        }
    });
};
//Borrar
exports.borrar = (req, res) => {
    Perfil.delete(req, (err, perfil) => {
        if(err){
            res.status(500).send({
                message: err.message || "Error al borrar perfil"
            })
        }else{
            console.log(perfil);
            res.status(200).send(data);
        }
    });
};