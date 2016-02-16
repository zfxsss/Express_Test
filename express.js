//initialize web api components
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var passport = require('passport');
var session = require('express-session');

module.exports = function(){
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    //app.use(express.cookieParser());
    
    app.use(session({ secret: 'keyboard cat' }));
    
    app.use(passport.initialize());
    app.use(passport.session());
    
    //add some middleware here to config express accessing
    //middleware patten has immense power in programming
    //it can be extremly flexible and powerful if be used appropriately
    
    //this is an authentication middleware
    //require('./authentication/authentication.server.route')(app);
    require('./authentication/passport.server.route')(app);
    
    //routing configuration
    require('./apirouting/piavgrecords.server.route')(app);
    require('./apirouting/pirecords.server.route')(app);
    //add more middleware or routing here
    
    return app;
}


