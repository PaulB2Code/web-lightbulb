var express = require('express');
var app = express();
var path = require("path");

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/styles.css', function(req, res){
    res.sendFile(path.join(__dirname + '/styles.css'));
});

app.use(express.static('web'));

app.get('/bulb.js', function(req, res){
    res.sendFile(path.join(__dirname + '/bulb.js'));
});

app.get('/serviceworker.js', function(req, res){
    res.sendFile(path.join(__dirname + '/serviceworker.js'));
});

app.listen(8080);
