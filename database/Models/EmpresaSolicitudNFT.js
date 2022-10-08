module.exports = (sequelize, DataTypes) => {

    const EmpresaSolicitudNFT = sequelize.define('EMPRESA_SOLICITUD_NFT', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        estaAprobado: DataTypes.TINYINT,
        idEmpresa: DataTypes.INTEGER,
        idEmpresaSolicitud: DataTypes.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false,
    })

    return EmpresaSolicitudNFT;
}

