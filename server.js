var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.render('index.ejs');
});
app.use(function (req, res, next) {
    res.setHeader('content-type', 'text/html');
    res.status('page introuvable');
});
// initialisation du socket :  
var io = require('socket.io')(server);
server.listen(3000, function () {
    console.log('Server MyIRC1 3000');
});
