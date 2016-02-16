var piavgrecords = require('../dbaccess/controllers/piavgrecords.server.controller');

//add rest api
module.exports = function(app){
    app.route('/piavgrecords/:id').get(piavgrecords.piavgrecords_select);
    app.route('/piavgrecords/:id').put(piavgrecords.piavgrecords_update);
    app.route('/piavgrecords/:id').delete(piavgrecords.piavgrecords_delete);
    app.route('/piavgrecords').post(piavgrecords.piavgrecords_insert);
    //add more routing
    
};