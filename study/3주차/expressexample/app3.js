var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);
//port 환경변수로 실행 없으면 3000으로 실행해라

app.use(function (req, res, next) {
    console.log('미들웨어 호출됨');
    //res.redirect('http://google.co.kr')
    // req.user = 'mike';
    // next();
    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;

    res.send(userAgent, paramName);
}); // 미들웨어 등록


// app.use(function (req, res, next) {
//     console.log('second middleware')
//     // res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
//     // res.end('<h1> server res : ' + req.user + '<h1>');
//     //res.send('<h1> server res : ' + req.user + '<h1>');

//     var person = { name: 'jinny', age: 20 };

//     // var personStr = Json.stringify(person);
//     // res.send(personStr)
//     res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" })
//     res.write(person);
//     res.end();
// });

var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('express webserver')
});

