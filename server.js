var db = require('./dbaccess/mongoose')();
var passport = require('./dbaccess/passport.config')();
var webserver = require('./express')().listen(5500);