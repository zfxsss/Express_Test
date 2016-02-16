/*** 
    ZQ 2015
    By Xu Zhefeng
***/

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("get the connection!");
});

//pirecords schema
var pirecordsSchema = mongoose.Schema({
    pname: String,
    timestamps: Date,
    pvalue: Number,
    updatetime: Date,
    machineid: Number,
    plantid: Number
});

//piavgrecords schema
var piavgrecordsSchema = mongoose.Schema({
    pname: String,
    pvalue: Number,
    timestamps: Date,
    updatetime: Date
});

var PiRecords = mongoose.model('PiRecords', pirecordsSchema);

var PiAvgRecords = mongoose.model('PiAvgRecords', piavgrecordsSchema);

//pirecords API
exports.pirecords_insert = function(req, res){
    var npr = new PiRecords({
       pname: req.body.pname, 
       timestamps: req.body.timestamps,
       pvalue: req.body.pvalue, 
       updatetime: req.body.updatetime,
       machineid: req.body.machineid,
       plantid: req.body.plantid
     });
     npr.save(function(err, npr){
         if(err) {
             console.log(err);
             return res.json(null);
         }
         res.json(npr);
     });
};

exports.pirecords_select = function(req, res){
      PiRecords.findOne({'_id': req.params.id}, function(err, pr){
         if(err) 
         {
             console.log(err);
             return res.json(null);
         }
         res.json(pr._doc);
     });
};

exports.pirecords_delete = function(req, res){
    PiRecords.findOneAndRemove(req.params.id, function(err, pr){
        if(err){
            console.log(err);
            return res.json(null);          
        }
        res.json(pr);
    });    
};

exports.pirecords_update = function(req, res){
    PiRecords.findOneAndUpdate(req.params.id, req.body, function(err, pr){
        if(err){
            console.log(err);
            return res.json(null);
        }
        res.json(pr);
    });
};

//piavgrecords API
exports.piavgrecords_insert = function(req, res){
    var npvr = new PiAvgRecords({
       pname: req.body.pname, 
       timestamps: req.body.timestamps,
       pvalue: req.body.pvalue, 
       updatetime: req.body.updatetime
     });
     npvr.save(function(err, npvr){
         if(err) {
             console.log(err);
             return res.json(null);
         }
         res.json(npvr);
     });
};

exports.piavgrecords_select = function(req, res){
      PiAvgRecords.findOne({'_id': req.params.id}, function(err, pvr){
         if(err) 
         {
             console.log(err);
             return res.json(null);
         }
         res.json(pvr._doc);
     });
};

exports.piavgrecords_delete = function(req, res){
    PiAvgRecords.findOneAndRemove(req.params.id, function(err, pvr){
        if(err){
            console.log(err);
            return res.json(null);            
        }
        res.json(pvr);
    });    
};

exports.piavgrecords_update = function(req, res){
    PiAvgRecords.findOneAndUpdate(req.params.id, req.body, function(err, pvr){
        if(err){
            console.log(err);
            return res.json(null);
        }
        res.json(pvr);
    });
};




