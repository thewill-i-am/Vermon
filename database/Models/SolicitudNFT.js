module.exports = (sequelize, DataTypes) => {

    const SolicitudNFT = sequelize.define('SOLICITUD_NFT', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pdf: DataTypes.STRING,
        idTipoNFT: DataTypes.INTEGER,
        estaAprobado: DataTypes.TINYINT,
        idEmpresa: DataTypes.INTEGER,

    }, {
        freezeTableName: true,
        timestamps: false,
    })

    return SolicitudNFT;
}

