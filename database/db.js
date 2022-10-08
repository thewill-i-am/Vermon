const { Sequelize, Model, DataTypes } = require("sequelize");

const config = new Sequelize("ECOTRADE", "root", "123Queso.", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
});

const db = {};
db.sequelize = config
db.models = {}
db.models.Usuario = require('./Models/Usuario')(config, Sequelize.DataTypes);
db.models.Empresa = require('./Models/Empresa')(config, Sequelize.DataTypes);
db.models.EmpresaSolicitudNFT = require('./Models/EmpresaSolicitudNFT')(config, Sequelize.DataTypes);
db.models.Evidencias = require('./Models/Evidencias')(config, Sequelize.DataTypes);
db.models.Nft = require('./Models/Nft')(config, Sequelize.DataTypes);
db.models.SolicitudEmpresa = require('./Models/SolicitudEmpresa')(config, Sequelize.DataTypes);
db.models.SolicitudNFT = require('./Models/SolicitudNFT')(config, Sequelize.DataTypes);
db.models.TipoEmpresa = require('./Models/TipoEmpresa')(config, Sequelize.DataTypes);
db.models.TipoNFT = require('./Models/TipoNFT')(config, Sequelize.DataTypes);

module.exports = db;

// class Empresa {
//   insert = async (
//     nombre,
//     direccion,
//     servicio,
//     tipo,
//     email,
//     numeroTelefonico
//   ) => {
//     try {
//       await db.query(
//         `INSERT INTO EMPRESA(Nombre, Direccion, Servicio, Tipo, Email, NumeroTelefonico) VALUES ('${nombre}', '${direccion}', '${servicio}', '${tipo} ', '${email}', '${numeroTelefonico}')`
//       );
//     } catch (e) {
//       console.error(e);
//     }
//   };
// }

// class FormularioSolicitud {
//   insert = async (documento) => {
//     try {
//       await db.query(
//         `INSERT INTO FORMULARIOS_SOLICITUD(Documento) VALUES ('${documento}')`
//       );
//     } catch (e) {
//       console.error(e);
//     }
//   };
// }
// class Evidencia {
//   insert = async (Documento) => {
//     try {
//       await db.query(
//         `INSERT INTO EVIDENCIA (Documento) VALUES ('${Documento}')`
        
//       );
//     } catch (e) {
//       console.error(e);
//     }
//   };
  
// }
  
// class Usuario {
//   insert = async (nombre, email) => {
//     try {
//       await db.query(
//         `INSERT INTO USUARIO (Nombre, Password, Email, EsAdmin) VALUES ('${nombre}', 'password','${email}', 0)`
//       );
//     } catch (e) {
//       console.error(e);
//     }
//   };
// }

// class FormularioUsuarioEmpresa{
//  insert = async (nombreEmpresa, id) => {
//     try {
//       await db.query(
//         `INSERT INTO USUARIO_EMPRESA (USUARIO_ID, EMPRESA_ID) VALUES ('${nombreEmpresa}','${id}')`
//       );
//     } catch (e) {
//       console.error(e);
//     }
//     debugger
//   };
// }




// module.exports = {Usuario, FormularioSolicitud, Evidencia, Empresa, FormularioUsuarioEmpresa};
