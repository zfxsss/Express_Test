//initialize the connection with Mongo

/****
 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("get the connection!");
});

****/

var dbaccess = require('./DbAccess');

//initialize web api components
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

var app = express();
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//set routing for api
app.get('/', function(req, res) {
  res.send('hello world from /');
});

app.get('/datahere',function(req, res) {
  res.send({"id":123,"name":"asp"});
});

app.get('/datahere/:id',function(req,res){
   res.send(req.params.id); 
});

//Content-Type: application/json
app.post('/comehere', function(req,res,next){
  res.send(req.body);
  console.log(req.body);
  console.log(req.is('json'));
});

app.put('/beupdated',function(req,res){
   res.send("be updated"); 
});

app.delete('/bedeleted/:id2',function(req,res){
   res.send("be deleted" + req.params.id2); 
});

/***************** 
the routing below is for real scenarios
******************/

/**************** GET ****************/
//pirecords get
app.get('/pirecords/:id', function(req, res) {
   dbaccess.pirecords_select(req, res);
});

//piavgrecords get
app.get('/piavgrecords/:id', function(req, res) {
   dbaccess.piavgrecords_select(req, res);
});


/**************** DELETE ****************/
//pirecords delete
app.delete('/pirecords/:id', function(req, res) {
  dbaccess.pirecords_delete(req, res);
});

//piavgrecords delete
app.delete('/piavgrecords/:id', function(req, res) {
   dbaccess.piavgrecords_delete(req, res);
});

/**************** PUT ****************/
//pirecords update
app.put('/pirecords/:id', function(req, res) {
  dbaccess.pirecords_update(req, res);
});

//piavgrecords update
app.put('/piavgrecords/:id', function(req, res) {
  dbaccess.piavgrecords_update(req, res);
});

/**************** POST ****************/
//pirecords insert
app.post('/pirecords', function(req, res) {
  dbaccess.pirecords_insert(req, res);
});

//piavgrecords insert
app.post('/piavgrecords', function(req, res) {
  dbaccess.piavgrecords_insert(req, res);
});

//listening port
app.listen(5500);