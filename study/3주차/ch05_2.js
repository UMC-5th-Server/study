var http = require('http');

var server = http.createServer();

var host = 'localhost';

var port = 3000;

server.listen(port, host, 50000, function () {
    console.log('webserver start : ' + port);
});

server.on('connection', function (socket) { console.log('client connection') });

server.on('request', function (req, res) {
    console.log('client requset');
    //console.dir(req);
    res.writeHead(200, { "content-Type": "text/html;charset=utf-8" });
    res.write('<h1>webserver res</h1>');
    res.end();
});
