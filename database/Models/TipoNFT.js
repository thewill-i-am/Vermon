module.exports = (sequelize, DataTypes) => {

    const TipoNft = sequelize.define('TIPO_NFT', {
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

    return TipoNft;
}

