// 외부 module 불러올 때 require 사용
const { SEND_MAIN_PING } = require("./constants");
const sum = require("./module/sum");
const http = require("http");

// 폴더를 모듈로 사용
const myModule = require("./module");

console.log(myModule.sum(1, 2));
console.log(myModule.minus(3, 2));
console.log(SEND_MAIN_PING);
console.log(sum(1, 2));

// express 예제
const express = require("express");
const app = express();

// Get요청 (http://localhost:3000/) -> Hello World 출력
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// 3000 포트 사용
app.listen(3000);
