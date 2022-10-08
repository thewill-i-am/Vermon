module.exports = (sequelize, DataTypes) => {

    const SolicitudEmpresa = sequelize.define('SOLICITUD_EMPRESA', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: DataTypes.STRING,
        longitud: DataTypes.STRING,
        latitud: DataTypes.STRING,
        numeroTelefono: DataTypes.STRING,
        fechaSolicitud: DataTypes.STRING,
        estaAprobado: DataTypes.TINYINT,
        idTipoEmpresa: DataTypes.INTEGER,
    }, {
        freezeTableName: true,
        timestamps: false,
    })

    return SolicitudEmpresa;
}

