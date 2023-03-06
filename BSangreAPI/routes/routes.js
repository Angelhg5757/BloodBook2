module.exports = (app) => {
    // const persona = require("../controllers/persona.controller");
    // const publicacion = require("../controllers/publicacion.controller.js");
    // const comentario = require("../controllers/comentario.controller");
    const usuario = require("../controllers/usuario.controller");
    const publicacion = require("../controllers/publicacion.controller");
    const imagen = require("../controllers/imagen.controller");
    const sangre = require("../controllers/sangre.controller");
    const roles = require("../controllers/roles.controller");
    const foto = require("../controllers/fotoPerfil.controller");
    var router = require("express").Router();
    
    router.post("/loginUser", usuario.postLogin);

    //Rutas de usuario
    router.get("/usuario/listar", usuario.list);
    router.post("/usuario/crear", usuario.crear);
    router.put("/usuario/actualizar", usuario.actualizar);
    router.delete("/usuario/eliminar", usuario.eliminar);

    //Rutas de publicacion
    router.get("/publicacion/listar", publicacion.list);
    router.post("/publicacion/crear", publicacion.crear);
    router.put("/publicacion/actualizar", publicacion.actualizar);
    router.delete("/publicacion/eliminar", publicacion.eliminar);

    //Rutas de imagen
    router.get("/imagen/listar", imagen.list);
    router.post("/imagen/crear", imagen.crear);
    router.put("/imagen/actualizar", imagen.actualizar);
    router.delete("/imagen/eliminar", imagen.eliminar);

    //Rutas de sangre
    router.get("/sangre/listar", sangre.list);

    //Rutas de roles
    router.get("/roles/listar", roles.list);
    
    //Rutas de Foto de perfil
    router.get("/foto/listar", foto.list);
    router.post("/foto/crear", foto.crear);
    router.put("/foto/actualizar", foto.actualizar);
    router.delete("/foto/eliminar", foto.eliminar);

    //Rutas de perfil
    router.get("/perfil/listar", usuario.listar);
    router.post("/perfil/crear", usuario.crear);
    router.put("/perfil/actualizar", usuario.actualizar);
    router.delete("/perfil/eliminar", usuario.eliminar);

    //Rutas de redes
    router.get("/redes/listar", usuario.listar);
    router.post("/redes/crear", usuario.crear);
    router.put("/redes/actualizar", usuario.actualizar);
    router.delete("/redes/eliminar", usuario.eliminar);

    // router.post("/persona", persona.create);
    // router.get("/persona", persona.list);
    // router.get("/persona/:id", persona.listID);
    // router.put("/persona/:id", persona.actualiza);
    // router.delete("/persona/:id", persona.borrar);

    // router.post("/persona/validar", persona.valida);
    // router.get("/todo", persona.todo);
    // router.delete("/persona/borrarcomentarios/:entrada", persona.borrarComentarios);

    // router.get("/publicacion", publicacion.list);
    // router.post("/publicacion", publicacion.create);
    // router.get("/publicacion/:id", publicacion.listID);
    // router.put("/publicacion/:id", publicacion.actualiza);
    // router.delete("/publicacion/:id", publicacion.borrar);

    // router.get("/publicacion/publicacionesporsufijo/:c", publicacion.listPubli);
    // router.get("/publicacion/publicacionesporsufijo/:k", publicacion.listPubli);

    app.use(router);
};