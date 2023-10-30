var express = require('express');
var jwt = require('jsonwebtoken');

const app = express();

app.get('/api', function(req,res){
    res.json({
        text:'my api'
    });
});

app.post('/api/login', function(req,res){
    const user = {id :3 };
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({
        token:token
    });
});

app.get('/api/protected', ensureToken,  function(req,res){
    jwt.verify(req.token, 'my_secret_key', function(err,data){
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                text:'this is protected',
                data:data
            });
        }
    })
    // res.json({
    //     text:'this is protected'
    // });
});

function ensureToken(req,res,next){
    const beareHeader = req.headers["authorization"];
    if(typeof beareHeader !== 'undefined'){
        const bearer = beareHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else
    { 
        res.sendStatus(403);
    }
}
app.listen(3000,function(){
    console.log('port 3000!');
})
