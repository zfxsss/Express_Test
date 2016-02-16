var PiRecords = require('mongoose').model('PiRecords');

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
    PiRecords.findOneAndRemove({'_id': req.params.id}, function(err, pr){
        if(err){
            console.log(err);
            return res.json(null);          
        }
        res.json(pr);
    });    
};

exports.pirecords_update = function(req, res){
    PiRecords.findOneAndUpdate({'_id' : req.params.id}, req.body, function(err, pr){
        if(err){
            console.log(err);
            return res.json(null);
        }
        res.json(pr);
    });
};