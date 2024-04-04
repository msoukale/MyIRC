var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.render('index.ejs');
}); 

app.use((req, res, next) => {
    res.setHeader('content-type' , 'text/html');
    res.status('page introuvable');
});

// initialisation du socket :  
var io = require('socket.io')(server);

server.listen(3000, () => {
    console.log('Server MyIRC1 3000');
});
