var express = require('express');
var app = express();

const db = require('./models');
const user = require('./models');

app.get('/select', (req, res) => {
    user.findAll({where: {firstName: "John"}})
    .then((users) => {
        res.send(users);
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/insert', (req, res) => {
    user.create({
        firstName: "Pedro",
        age: 19,
    }).catch((err) => {
        if (err){
            console.log(err);
        }
    });

    res.send('insert');
});

app.get('/delete', (req, res) => {
    user.destroy({where: {id: 18}});
    res.send('delete');
});

db.sequelize.sync().then((req) => {
    app.listen(3000, function() {
        console.log('app listen on 3000!');
    });
});
