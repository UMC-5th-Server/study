var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next){
    console.log('1st middle ware');

    req.user = 'dada';

    next();   
});   //미들웨어 등록

app.use('/', function(req, res, next){
    console.log('2st middle ware');
    
    //res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    //res.send('<h1>server response!' + req.user + '</h1>');
    
    var person = {name:'dada', age:23};     //json으로 전송
    //res.send(person);
    var personStr = JSON.stringify(person);
    //res.send(personStr);
    res.writeHead(200, {"Content-Type":"text/json;charset=utf-8"});
    res.write(personStr);
    res.end();
});


var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('web server start to express : ' + app.get('port'));
});