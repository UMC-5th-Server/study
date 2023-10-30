var http = require('http');
//서버를 담당하는 역할

var server = http.createServer();
// 웹 서버 객체 리턴


var host = 'localhost';
//나의IP를 확인해서 값 집어넣어도 됨 그럼 로컬 호스트임

//클라이언트 대기 요청 응답
var port = 3000;

// server.listen(port, function () {
//     console.log('webserver start : ' + port);
// });

server.listen(port, host, 50000, function () {
    console.log('webserver start : ' + port);
});

//클라이언트가 요청을 보냇을 때 이벤트를 실행시킬 수 있도록
