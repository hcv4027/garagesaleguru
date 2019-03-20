module.exports = function(sequelize, DataTypes) {

    var GarageSales = sequelize.define('GarageSales', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zipcode: DataTypes.INTEGER,
        invID: DataTypes.INTEGER,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
    return GarageSales;
};

