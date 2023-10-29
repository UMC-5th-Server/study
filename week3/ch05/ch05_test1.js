var http = require('http');

var server = http.createServer();

var host = 'localhost';     //ip
var port = 3000;
server.listen(port, host, '50000', function(){
    console.log('web server start -> ' + host + ':' + port);
});
