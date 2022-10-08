const express = require("express");
const router = express.Router();
const startCreating = require("../src/logic/nft");
const { Usuario, FormularioSolicitud, Evidencia, Empresa, FormularioUsuarioEmpresa} = require("../database/db");

router.get("/generador", async(req, res) => {
    console.log("llego aqui")
    var x = await startCreating();
    res.send({ imagenes: x.dat, jsonContract: x.textPadre });
});

router.post("/crearEmpresa", async(req, res, next) => {
    const empresa = new Empresa();
    //TODO: Pasar parametros
    // await empresa.insert();
    res.sendStatus(200);

});

router.post("/crearFormularioSolicitud", async(req, res, next) => {
    const formularioSolicitud = new FormularioSolicitud();
    //TODO: Pasar parametros

    console.log(req.body)
    await formularioSolicitud.insert(req.body.Documento);
    res.sendStatus(200);
});


router.post("/crearEvidencias", async(req, res, next) => {
    const evidencia = new Evidencia();
    //TODO: Pasar parametros

    console.log(req.body)
    await evidencia.insert(req.body.Documento);
    res.sendStatus(200);
    
});

router.post("/conectarUsuarioGoogle", async(req, res, next) => {
    const usuario = new Usuario();
    //TODO: Pasar parametros
    // await usuario.insert();
    res.sendStatus(200);
}); 

router.post("/crearFormularioUsuarioEmpresa", async(req, res, next) => {
    const formularioUsuarioEmpresa = new FormularioUsuarioEmpresa();
    //TODO: Pasar parametros

    console.log(req.body)
    await formularioUsuarioEmpresa.insert(req.body.Id,req.body.Nombre);
    res.sendStatus(200);
   
});


module.exports = router;