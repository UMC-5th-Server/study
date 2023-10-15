var http = require("http"); // http 모듈을 사용하겠다

var server = http.createServer(); // 웹서버 객체 만들어짐

var host = "192.168.45.73"; // localhost -> 나 자신을 말함. 실제로는 ip를 많이 할당함
var port = 3000;
server.listen(port, host, 50000, function () {
  console.log("웹서버가 실행되었습니다. -> " + host + " : ", port);
}); // 대기 (포트 번호, 호스트, 백로그(동시 접속할 수 있는 클라이언트 수), 웹 서버가 정상적으로 실행될때 호출되는 함수)

// .js 파일 실행하려면 -> 터미널에 node 파일명.js로 접속 가능
