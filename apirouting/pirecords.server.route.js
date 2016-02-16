var pirecords = require('../dbaccess/controllers/pirecords.server.controller');

//add rest api
module.exports = function(app){
    app.route('/pirecords/:id').get(pirecords.pirecords_select);
    app.route('/pirecords/:id').put(pirecords.pirecords_update);
    app.route('/pirecords/:id').delete(pirecords.pirecords_delete);
    app.route('/pirecords').post(pirecords.pirecords_insert);
    
    //add more routing
    
};