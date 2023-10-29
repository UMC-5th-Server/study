var http = require('http');
var fs = require('fs');

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
    var filename = 'house.png';
    fs.readFile(filename, function(err, data){
        res.writeHead(200, {"Content-Type":"image/png"}); //response head
        res.write(data);   //response boby
        res.end();
    });  
});

//var req = http.get(option, function(res){})
//post는 request


