var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var multer  = require('multer');
var upload = multer();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

// Use multer({ dest: './uploads/' }) if you wish to actually save files (not saving here, so argument left blank)
app.post('/', multer({ }).single('upload'), function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({size: req.file.size}));
});

var port = process.env.PORT || 1337;
http.createServer(app).listen(port);
