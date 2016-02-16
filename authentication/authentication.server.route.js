var authentication = require('../dbaccess/controllers/authentication.server.controller');

module.exports = function(app){
    app.all('*',authentication.authentication);
};