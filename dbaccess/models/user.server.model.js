var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
    
//piavgrecords schema
var usersSchema = Schema({
    username: String,
    password: String
});

mongoose.model('users', usersSchema);