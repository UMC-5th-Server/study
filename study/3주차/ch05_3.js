var http = require('http');
var fs = require('fs'); //파일 시스템 모듈 

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
    var filename = 'house.png';
    fs.readFile(filename, function (err, data) {
        res.writeHead(200, { "content-Type": "image/png" });
        res.write(data);
        res.end();
    });
    //파일을 보낼 수 있음 웹서버 안에서 이벤트를 일으켜 콜백 함수로 응답해줌 
    //특정 서버에서 데이터 가져오는 것도 가능  가공해서 클라이언트에 보냊기
    //http.get() -> 데이터 받아오기
    //http.request(opts,function(res)) -> post 방식으로 요청 할 때 메소드
});
