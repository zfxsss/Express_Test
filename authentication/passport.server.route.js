var authentication = require('../dbaccess/controllers/passport.server.controller');

module.exports = function(app){
    app.all('*',authentication.authentication);
};