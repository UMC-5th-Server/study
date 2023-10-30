//익스프레스 서버 사용하면 미들웨어와 라우터가 생겨서 더 좋당
//웹서버 역할
//main file name : app
var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);
//port 환경변수로 실행 없으면 3000으로 실행해라

var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('express webserver')
});
//expres로 웹서버를 작동시키는 방법

//클라이언트가 요청ㅇ이 들어오며녀 미들웨어에서 가로채서 요청처리함 미들웨어 여러개 등록
//다음 미들웨어 처리 -> 다음 미들웨어 처리 반드시 next 해줘야하고 
//미들웨어 등록은 user()
//라우터로 요청 패스로 실행 되ㅣㄹ 수있도록
