module.exports = (sequelize, DataTypes) => {

    const Nft = sequelize.define('NFT', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        metadatos: DataTypes.STRING,
        idEvidencia: DataTypes.INTEGER
    }, {
        freezeTableName: true,
        timestamps: false,
    })

    return Nft;
}

