// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//Express server setup
var app = express();

//Port that application will be listening on.
var PORT = process.env.PORT || 8080;

var db = require("./models");



//Middleware used parsing information as json, url, or text.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routes/addresses")(app);


// db.sequelize.sync({ force: true})
db.sequelize.sync()
.then(function() {
    // if(err) throw err;
    console.log('connected to database');
    //Command to turn express server on.
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
});
