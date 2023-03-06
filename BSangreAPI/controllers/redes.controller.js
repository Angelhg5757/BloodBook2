const Redes = require('./models/redes.model');
//listar 
exports.listar = (req, res) => {
    Redes.getAll((err,data)=>{
        if (err) {
            res.status(500).send({
                message: err.message || "Error al listar los redes"
            });
    } else {
        res.status(200).send(data);
    }
});
};
//crear
exports.crear = (req, res) => {
    Redes.create(req,(err,data)=>{
        if(err) {
            res.status(500).send({
                message: err.message || "Error al crear el redes"
            });
        }else{
            res.status(200).send(data);
        }
    });
};
//Actualizar
exports.actualizar = (req, res) => {
    Redes.update(req,(err,data)=>{
        if(err) {
            res.status(500).send({
                message: err.message || "Error al actualizar el redes"
            });
        }else{
            res.status(200).send(data);
        }
    });
};
//borrar
exports.borrar = (req, res) => {
    Redes.delete(req,(err,data)=>{
        if(err) {
            res.status(500).send({
                message: err.message || "Error al borrar el redes"
            });
        }else{
            res.status(200).send(data);
        }
    });
};