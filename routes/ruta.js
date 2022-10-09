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
        Nft,
        Evidencias,
        EmpresaSolicitudNFT
    },
} = require("../database/db");


router.get("/generador", async (req, res) => {
    var NFT = await startCreating();
    res.send({ imagenes: NFT.dat, jsonContract: NFT.textPadre });
});

router.post("/solicitudEmpresa", async (req, res, next) => {
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
        res.status(200).json({ 'success': true, 'solicitudEmpresa': solicitudEmpresa })
    } catch (err)
    {
        res.status(500).send({ 'success': false, 'error': err });
    }

    next();
});

router.post("/empresa/:id", async (req, res, next) => {
    try
    {
        var sol = await SolicitudEmpresa.findOne({ where: { id: req.params.id } });
        sol.set({
            estaAprobado: req.body.estaAprobado
        })
        await sol.save()
        var empresa = await Empresa.create({
            idSolicitudEmpresa: sol.id
        })
        var usuario = await Usuario.create({
            nombre: req.body.nombre,
            correo: req.body.correo,
            password: 'password',
            esAdminEmpresa: false,
            idEmpresa: empresa.id

        });

        res.status(200).json({ 'success': true, 'empresa': empresa, "usuario": usuario })
    } catch (err)
    {
        res.status(500).send({ 'success': false, 'error': err });
    }

    next();
});

router.post("/NFT/:id", async (req, res, next) => {
    try
    {
        var evi = await Evidencias.findOne({ where: { id: req.params.id } });
        evi.set({
            estaAprobado: req.body.estaAprobado
        })
        await evi.save()

        if (req.body.estaAprobado)
        {
            var creacion = startCreating()
            var nft = await Nft.create({
                metadatos: JSON.stringify({ "imagen": (await creacion).dat, "token": (await creacion).textPadre }),
                idEvidencia: evi.id
            });

            res.status(200).json({ 'success': true, 'NFT': "aprobado" })

        }
        res.status(200).json({ 'success': true, 'NFT': "rechazado" })

    } catch (err)
    {
        res.status(500).send({ 'success': false, 'error': err });
    }

    next();
});

router.post("/solicitudNFT", async (req, res, next) => {
    try
    {
        var solicitudNFT = await SolicitudNFT.create({
            pdf: req.body.pdf,
            idTipoNFT: req.body.idTipoNFT,

        });
        res.status(200).json({ 'success': true, 'NFT': solicitudNFT })
    } catch (err)
    {
        console.log(err)
        res.status(500).send({ 'success': false, 'error': err });
    }

    next();
});

router.post("/empresaSolicitudNFT", async (req, res, next) => {
    try
    {
        var empresa = await Empresa.findOne({ where: { id: req.body.idEmpresa } });
        var solicitudNFT = await SolicitudNFT.findOne({ where: { id: req.body.idSolicitudNFT } });

        var empresaSolicitudNFT = await EmpresaSolicitudNFT.create({
            estaAprobado: req.body.estaAprobado,
            idEmpresa: empresa.id,
            idEmpresaSolicitud: solicitudNFT.id

        });
        res.status(200).json({ 'success': true, 'EmpresaSolicitudNFT': empresaSolicitudNFT })
    } catch (err)
    {
        res.status(500).send({ 'success': false, 'error': err });
    }

    next();
});

router.post("/evidencia", async (req, res, next) => {
    try
    {
        var empresaSolicitudNFT = await EmpresaSolicitudNFT.findOne({ where: { id: req.body.idEmpresaSolicitudNFT } });

        var evidencias = await Evidencias.create({
            imagen: req.body.imagen,
            video: req.body.video,
            pdf: req.body.pdf,
            idEmpresaSolicitudNFT: empresaSolicitudNFT.id,
            estaAprobada: 0
        });
        res.status(200).json({ 'success': true, 'evidencia': evidencias })
    } catch (err)
    {
        res.status(500).send({ 'success': false, 'error': err });
    }

    next();
});

// TODO: Implementar esta logica despues de la creacion de la empresa
router.post("/usuario", async (req, res, next) => {
    try
    {
        var usuario = await Usuario.create({
            type: req.body.imagen,
            nombre: req.body.nombre,
            correo: req.body.correo,
            password: 'password',
            esAdminEmpresa: req.body.esAdminEmpresa,
            idEmpresa: req.body.idEmpresa
        });
        res.status(200).json({ 'success': true, 'Usuario': usuario })


    } catch (err)
    {
        res.status(500).send({ 'success': false, 'error': err });
    }

    next();
});

module.exports = router;
