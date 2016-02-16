'use strict';

var User = require('mongoose').model('users');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

module.exports = function(){
    passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
    },
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        /*
        if (!user.authenticate(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        */
        if(user.password != password)
        {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }));
};