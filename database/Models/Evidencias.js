module.exports = (sequelize, DataTypes) => {

    const Evidencia = sequelize.define('EVIDENCIAS', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        imagen: DataTypes.STRING,
        video: DataTypes.STRING,
        pdf: DataTypes.STRING,
        estaAprobado: DataTypes.TINYINT,
        idSolicitudNFT: DataTypes.INTEGER,
    }, {
        freezeTableName: true,
        timestamps: false,
    })

    return Evidencia;
}

