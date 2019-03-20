module.exports = function(sequelize, DataTypes) {

    var Inventory = sequelize.define('Inventory', {
        
        quantity: DataTypes.INTEGER,
        item_description: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        item_image: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },{
        freezeTableName: true
    });
    return Inventory;
};
