const express = require("express");
const router = express.Router();
const startCreating = require("../src/logic/nft");
const {
    models: {
        Usuario,
        Empresa,
        SolicitudEmpresa,
        SolicitudNFT,
        TipoNFT,
        TipoEmpresa,
    },
} = require("../database/db");

router.get("/generador", async (req, res) => {
    var x = await startCreating();
    res.send({ imagenes: x.dat, jsonContract: x.textPadre });
});

router.post("/crearSolicitudEmpresa", async (req, res, next) => {
    try
    {
        var solicitudEmpresa = await SolicitudEmpresa.create({
            nombre: req.body.nombre,
            longitud: req.body.longitud,
            latitud: req.body.latitud,
            numeroTelefono: req.body.numeroTelefono,
            fechaSolicitud: req.body.fechaSolicitud,
            estaAprobado: 0,
            idTipoEmpresa: req.body.idTipoEmpresa,
        });
        res.status(200).json({'success' : true, 'empresa': solicitudEmpresa})
    } catch (err)
    {
        res.status(500).send(err);
    }

    next();
});

router.post("/crearEmpresa/:id", async (req, res, next) => {
    try { 
        console.log(req.params.id)
        var sol = await SolicitudEmpresa.findOne({ where: { id: req.params.id } });
        sol.set({
            estaAprobado : true
        })
        await sol.save()
        var empresa = await Empresa.create({
            idSolicitudEmpresa : sol.id
        })
        res.status(200).json({'success' : true, 'sol': empresa})
    }catch(err){
        res.status(500).send(err);
    }

    next();
});

router.post("/crearEvidencias", async (req, res, next) => {
    //TODO: Pasar parametros
    console.log(req.body);
    await evidencia.insert(req.body.Documento);
    res.sendStatus(200);
});

router.post("/conectarUsuarioGoogle", async (req, res, next) => {
    //TODO: Pasar parametros
    // await usuario.insert();
    res.sendStatus(200);
});

router.post("/crearFormularioUsuarioEmpresa", async (req, res, next) => {
    console.log(req.body);
    await formularioUsuarioEmpresa.insert(req.body.Id, req.body.Nombre);
    res.sendStatus(200);
});

module.exports = router;
