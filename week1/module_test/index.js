// // 모듈 불러오기 위해 require 사용
// const { SEND_MAIN_PING } = require("./constants");
// console.log(SEND_MAIN_PING);

// // const sum = require("./module/sum");
// // console.log(sum(1, 2));

// const myModule = require("./module");
// console.log(myModule.sum(1, 2));
// console.log(myModule.minus(4, 2));

// // core module
// const http = require("http");

// npm express
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  // 요청을 받으면
  res.send("Hello World"); // 전송
});

app.listen(3000); // app이라는 것을 3000번 포트로 실행
