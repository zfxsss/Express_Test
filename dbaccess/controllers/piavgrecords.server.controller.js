var PiAvgRecords = require('mongoose').model('PiAvgRecords');

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
    PiAvgRecords.findOneAndRemove({'_id': req.params.id}, function(err, pvr){
        if(err){
            console.log(err);
            return res.json(null);            
        }
        res.json(pvr);
    });    
};

exports.piavgrecords_update = function(req, res){
    PiAvgRecords.findOneAndUpdate({'_id': req.params.id}, req.body, function(err, pvr){
        if(err){
            console.log(err);
            return res.json(null);
        }
        res.json(pvr);
    });
};
