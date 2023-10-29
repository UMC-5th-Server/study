var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next){
    console.log('1st middle ware');

    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;

    res.send('<h3>server response : ' + userAgent + paramName + '</h3>');
});   //미들웨어 등록


var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('web server start to express : ' + app.get('port'));
});