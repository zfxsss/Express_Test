var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("get the connection!");
});


var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

//var silence = new Kitten({ name: 'Silence' });
//console.log(silence.name); // 'Silence'

/*
var fluffy = new Kitten({ name: 'fluffy' });

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  //console.log(fluffy.name);
});
*/

Kitten.find(function (err, kitten) {
  if (err) return console.error(err);
  console.log(kitten);
});


//var pirdSchema = mongoose.Schema({
//});

/*
var PiRecord = mongoose.model('PiRecord');

PiRecord.find();
*/

var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

var app = express();
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world from /');
  var fluffy = new Kitten({ name: 'fluffy' });
  fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  //console.log(fluffy.name);
  });
});

app.get('/datahere',function(req, res) {
  res.send({"id":123,"name":"asp"});
  var love = new Kitten({ name: 'love' + Date().toString() });
  love.save(function (err, fluffy) {
  if (err) return console.error(err);
  //console.log(fluffy.name);
  Kitten.find(function (err, kitten) {
  if (err) return console.error(err);
  console.log(kitten);
});
  });
});

app.post('/comehere',upload.array(), function(req,res,next){
  res.send(req.body);
  console.log(req.body);
  console.log(req.is('json'));
});

app.listen(5500);
