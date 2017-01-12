/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200);

  res.sendfile('index.html');
//  res.end('Hello World\n');
}).listen(8080, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8080/');

*/
var express = require('express');
var app = express();
var path = require("path");

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/styles.css', function(req, res){
    res.sendFile(path.join(__dirname + '/styles.css'));
});

app.get('/bulb.js', function(req, res){
    res.sendFile(path.join(__dirname + '/bulb.js'));
});

app.get('/serviceworker.js', function(req, res){
    res.sendFile(path.join(__dirname + '/serviceworker.js'));
});

app.listen(8080);
