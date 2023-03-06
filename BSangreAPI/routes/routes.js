module.exports = (app) => {
    // const persona = require("../controllers/persona.controller");
    // const publicacion = require("../controllers/publicacion.controller.js");
    // const comentario = require("../controllers/comentario.controller");
    const usuario = require("../controllers/usuario.controller");
    const publicacion = require("../controllers/publicacion.controller");
    const imagen = require("../controllers/imagen.controller");
    const sangre = require("../controllers/sangre.controller");
    const roles = require("../controllers/roles.controller");
    const perfil = require("../controllers/perfil.controller");
    const redes = require("../controllers/redes.controller");
    const foto = require("../controllers/fotoPerfil.controller");
    const contacto = require("../controllers/contacto.controller");
    var router = require("express").Router();
    
    //router.post("/loginUser", usuario.postLogin);

    //Rutas de usuario
    router.get("/usuario/listar", usuario.list);
    router.post("/usuario/crear", usuario.create);
    router.put("/usuario/actualizar/:id", usuario.actualizar);
    router.delete("/usuario/eliminar/:id", usuario.borrar);

    //Rutas de publicacion
    router.get("/publicacion/listar", publicacion.list);
    router.post("/publicacion/crear", publicacion.create);
    router.put("/publicacion/actualizar/:id", publicacion.actualizar);
    router.delete("/publicacion/eliminar/:id", publicacion.eliminar);

    //Rutas de imagen
    router.get("/imagen/listar", imagen.list);
    router.post("/imagen/crear", imagen.create);
    router.put("/imagen/actualizar/:id", imagen.actualizar);
    router.delete("/imagen/eliminar/:id", imagen.eliminar);

    //Rutas de sangre
    router.get("/sangre/listar", sangre.list);

    //Rutas de roles
    router.get("/roles/listar", roles.list);
    
    //Rutas de Foto de perfil
    router.get("/foto/listar", foto.list);
    router.post("/foto/crear", foto.create);
    router.put("/foto/actualizar/:id", foto.actualizar);
    router.delete("/foto/eliminar/:id", foto.eliminar);

    //Rutas de perfil
    router.get("/perfil/listar", perfil.listar);
    router.post("/perfil/crear", perfil.create);
    router.put("/perfil/actualizar/:id", perfil.actualizar);
    router.delete("/perfil/eliminar/:id", perfil.borrar);

    //Rutas de redes
    router.get("/redes/listar", redes.listar);
    router.post("/redes/crear", redes.create);
    router.put("/redes/actualizar/:id", redes.actualizar);
    router.delete("/redes/eliminar/:id", redes.borrar);

    router.get("/contacto/listar", contacto.listar);
    router.post("/contacto/crear", contacto.create);
    router.delete("/contacto/eliminar/:idContacto", contacto.eliminar);

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