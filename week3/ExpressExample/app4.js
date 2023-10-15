var express = require("express");
var http = require("http");

var app = express(); // express 서버 객체

app.set("port", process.env.PORT || 3000); // port 속성. 웹 서버가 실행될 때 포트를 어디로 할지 (환경변수에 PORT로 설정되어있는 것이 있다면. 만약 없으면 3000)

app.use(function (req, res, next) {
  console.log("첫번째 미들웨어 호출됨.");

  req.user = "mike";

  next(); // 이 미들웨어를 떠나게 됨
}); // 미들웨어 등록. 여기서 미들웨어는 함수

app.use(function (req, res, next) {
  console.log("두번째 미들웨어 호출됨.");

  //res.send("<h1>서버에서 응답한 결과입니다 : " + req.user + " </h1>"); // 이렇게도 보낼 수 있음

  // 객체를 보낼 수도 있음 {"name":"소녀시대","age":20}
  var person = { name: "소녀시대", age: 20 };
  //res.send(person);

  var personStr = JSON.stringify(person); // 객체를 json 문자열로 바꿔서 전달 (명시적)
  //   res.send(personStr);

  res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
  res.write(personStr);
  res.end(); // 위와 같음
});

var server = http.createServer(app).listen(app.get("port"), function () {
  console.log("익스프레스로 웹 서버를 실행함 : " + app.get("port"));
}); // express를 이용해서 웹 서버 만듦.
