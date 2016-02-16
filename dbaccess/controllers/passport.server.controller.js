var passport = require('passport');

exports.authentication = function(req, res, next){
   passport.authenticate('local', 
     function(err, user, info) {
       if (err) { return next(err); }
       if (!user) { return res.json('fuck, get out!'); }
       req.logIn(user, function(err) {
         if (err) { return next(err); }
         return res.json(user);
         //next();
       });
      //res.json(user);
  })(req, res, next);

};