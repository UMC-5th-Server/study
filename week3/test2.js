var http = require("http");

var server = http.createServer();

var host = "192.168.45.73";
var port = 3000;
server.listen(port, host, 50000, function () {
  console.log("웹서버 실행됨.");
});

server.on("connection", function (socket) {
  console.log("클라이언트가 접속했습니다.");
}); // connection(클라이언트가 접속할때를 말함. 이때 내부적으로 socket이 만들어짐) 이라는 이벤트가 발생했을때 옆에 콜백 함수를 실행해라

server.on("request", function (req, res) {
  console.log("클라이언트 요청이 들어왔습니다.");
  //console.dir(req);

  // 응답 보내기
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" }); // 헤더 정보를 클라이언트 쪽으로 전송해줌
  res.write("<h1>웹서버로부터 받은 응답</h1>"); // 웹페이지 내용을 전달해준다.
  res.end(); // 이때 전송
}); // 클라이언트 요청이 들어왔을때 발생하는 이벤트. 응답을 보낼 수 있음.

// .js 파일 실행하려면 -> 터미널에 node 파일명.js로 접속 가능, 이벤트 발생하려면 웹 브라우저에서 ip:포트번호 입력
