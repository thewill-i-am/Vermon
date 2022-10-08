module.exports = (sequelize, DataTypes) => {

    const TipoEmpresa = sequelize.define('TIPO_EMPRESA', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: DataTypes.STRING,
    }, {
        freezeTableName: true,
        timestamps: false,
    })

    return TipoEmpresa;
}

