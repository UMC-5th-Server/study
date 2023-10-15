var express = require("express");
var http = require("http");

var app = express(); // express 서버 객체

app.set("port", process.env.PORT || 3000); // port 속성. 웹 서버가 실행될 때 포트를 어디로 할지 (환경변수에 PORT로 설정되어있는 것이 있다면. 만약 없으면 3000)

var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("익스프레스로 웹 서버를 실행함 : " + app.get("port"));
}); // express를 이용해서 웹 서버 만듦.
