var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var multer  = require('multer');
var upload = multer();

var app = express();


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(res);
});

var port = process.env.PORT || 1337;
http.createServer(app).listen(port);
