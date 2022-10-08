module.exports = (sequelize, DataTypes) => {

    const Empresa = sequelize.define('EMPRESA', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idSolicitudEmpresa: DataTypes.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false,
    })

    return Empresa;
}

