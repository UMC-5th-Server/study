var express = require('express');
var jwt = require('jsonwebtoken');

var app = express();

app.get('/api', function(req, res){
    res.json({
        text: 'my api!'
    });
});

app.post('/api/login', ensureToken, function(req, res) {
    jwt.verify(req.token, 'my_secret_key', function(err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                text: 'this is protected',
                data: data
            });
        }
    });
    const user = { id: 3 };
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({
        token: token
    });
});

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split("");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.get('/api/protected', function(req, res){
    res.json({
        text: 'this is protected!'
    });
});

app.listen(3000, function() {
    console.log('app listen on 3000!');
});