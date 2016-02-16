var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
    
//pirecords schema
var pirecordsSchema = Schema({
    pname: String,
    timestamps: Date,
    pvalue: Number,
    updatetime: Date,
    machineid: Number,
    plantid: Number
});

mongoose.model('PiRecords', pirecordsSchema);