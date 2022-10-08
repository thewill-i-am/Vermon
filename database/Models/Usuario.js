module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define('USUARIO', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: DataTypes.STRING,
        correo: DataTypes.STRING,
        password: DataTypes.STRING,
        esAdminEmpresa: DataTypes.TINYINT,
        idEmpresa: DataTypes.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false,
    })

    return Usuario;
}

