var db = require('../models');

module.exports = function(app) {
    app.get('/api/addresses', function(req, res) {
        console.log('Hi from addresses');
        db.Addresses.findAll().then(function(allAddresses) {
            res.json(allAddresses)
        });
    });
    app.get('/api/garagesales', function(req, res) {
        db.GarageSales.findAll().then(function(allGarageSales) {
            res.json(allGarageSales)
        })
    });

    app.get('/api/getinventory', function(req, res) {
        db.Inventory.findAll().then(function(allInventory) {
            res.json(allInventory)
        })
    });

    app.post('/api/newaddress', function(req, res) {
        var newAddress = req.body;
        // Send data to the db
        db.Addresses.create(newAddress).then(function(address) {
            // Send response back to the front-end
            res.json(address);
        });
    });

    app.post('/api/inventory', function(req, res) {
        var inventoryItem = req.body;
        //Send new item to the db
        db.Inventory.create(inventoryItem).then(function(item) {
            console.log(item);
            res.json(item);
        });
    });

    //Add Post route for garage sale
    app.post('/api/newsale', function(req, res) {
        var garageSale = req.body;
        //Send new item to the db
        db.GarageSales.create(garageSale).then(function(newgaragesale) {
            res.json(newgaragesale);
        });
    });
};

