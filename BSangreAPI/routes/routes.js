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

    router.get("/usuario/listar", usuario.list);

    router.get("/publicacion/listar", publicacion.list);
    
    router.get("/imagen/listar", imagen.list);

    router.get("/sangre/listar", sangre.list);

    router.get("/roles/listar", roles.list);

    router.get("/foto/listar", foto.list);

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