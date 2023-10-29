var http = require('http');

var server = http.createServer();

var host = 'localhost';     //ip
var port = 3000;
server.listen(port, host, '50000', function(){
    console.log('web server start -> ' + host + ':' + port);
});

server.on('connection', function(socket) {
    console.log('client connect');
});

server.on('request', function(req, res){
    console.log('client request');
    //console.dir(req);           //request info

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"}); //response head
    res.write('<h1>web server response<h1>');   //response boby
    res.end();
});



