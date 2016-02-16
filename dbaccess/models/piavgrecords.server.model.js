var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
    
//piavgrecords schema
var piavgrecordsSchema = Schema({
    pname: String,
    pvalue: Number,
    timestamps: Date,
    updatetime: Date
});

mongoose.model('PiAvgRecords', piavgrecordsSchema);