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