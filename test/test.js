var express = require('express');
var http = require("http");

console.log(typeof(express));

console.log(typeof(http));

console.log(express === express.prototype.constructor);

var app = express();

// customizing the behavior of app.param()
app.param(function(param, option) {
  return function (req, res, next, val) {
    if (val == option) {
      next();
    }
    else {
      res.sendStatus(403);
    }
  }
});

// using the customized app.param()
app.param('id', 1337);

// route to trigger the capture
app.get('/user/:id', function (req, res) {
  res.send('OK');
})

var greet = express.Router();

greet.get('/jp', function (req, res) {
  console.log(req.baseUrl); // /greet
  console.log(req.hostname);
  console.log(req.accepts("text/html"));
  res.send('Konichiwa!<br>'+ req.accepts("test/html"));
});

app.use('/greet', greet); // load the router on '/greet'

app.listen(3000, function () {
  console.log('Ready');
})
