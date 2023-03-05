const FotoPerfil = require("../models/fotoPerfil.model");

exports.list = (req, res)=>{
    FotoPerfil.getAll((err, data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "Error al recuperar los datos",
            });
        else{
            console.log(`FotoPerfil.list $(data)`);
            res.status(200).json(data);
        }
    });
};