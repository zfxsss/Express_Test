'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  User = require('mongoose').model('users');

/**
 * Module init function.
 */
module.exports = function (app, db) {
  // Serialize sessions
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // Deserialize sessions
  passport.deserializeUser(function (id, done) {
    User.findOne({
      _id: id
    }, '-password', function (err, user) {
      done(err, user);
    });
  });
  
  require('./passport')();

};
