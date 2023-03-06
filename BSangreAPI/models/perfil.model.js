const sql = require('./db.js');

//Constructor
const Perfil = function(perfil){
    this.id = perfil.id;
    this.userTag = perfil.userTag;
    this.idFoto = perfil.idFoto;
    this.idUsuario = perfil.idUsuario;
}
//Crear
Perfil.create = function(perfil, result){
    const text = 'INSERT INTO "Perfil" ("userTag", "idFoto", "idUsuario") VALUES ($1, $2, $3)';
    const values = [perfil.userTag, perfil.idFoto, perfil.idUsuario];
    sql.query(text, values, function(err, res){
        if (err){
            console.log("Error al crear el perfil",err);
            result(err, null);
            return;
        }
        console.log("Perfil creado");
        result(null, res);
    });
};
//Obtener
Perfil.getAll = function(perfil, result){
    const text = 'SELECT * FROM "perfil" where "idPerfil" = $1';
    const values = [perfil.id];
    sql.query(text,values, function(err, res){
        if(err){
            console.log("Error al obtener los datos del perfi",err);
            result(err, null);
            return;
        }
        console.log("Perfil obtenido");
        result(null, res);
    });
};
//Eliminar
Perfil.delete = function(perfil, result){
    const text = 'DELETE FROM "perfil" where "idPerfil" = $1';
    const values = [perfil.id];
    sql.query(text,values, function(err, res){
        if(err){
            console.log("Error al eliminar el perfil",err);
            result(err, null);
            return;
        }
        console.log("Perfil eliminado");
        result(null, res);
    });
};
//Actualizar
Perfil.update = function(perfil, result){
    const text = 'UPDATE "perfil" SET "userTag" = $1, "idFoto" = $2, "idUsuario" = $3 WHERE "idPerfil" = $4';
    const values = [perfil.userTag, perfil.idFoto, perfil.idUsuario, perfil.id];
    sql.query(text,values, function(err, res){
        if(err){
            console.log("Error al actualizar el perfil",err);
            result(err, null);
            return;
        }
        console.log("Perfil actualizado");
        result(null, res);
    });
};

module.exports = Perfil;