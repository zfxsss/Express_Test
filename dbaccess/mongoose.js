var mongoose = require('mongoose');

module.exports = function(){
    var db = mongoose.connect('mongodb://localhost/test');
    //check connection status
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', function (callback) {
      console.log("get the connection!");
    });
    
    /**load models  **/
    require('./models/piavgrecords.server.model');
    require('./models/pirecords.server.model');

    //add more models
    require('./models/user.server.model');
    
    
    return db;
}