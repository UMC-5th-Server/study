const mysql = require('mysql');

const db = mysql.createConnection({
    host: "dadadb.c8xq7t0ivbkr.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "11111111",
    database: "dadaDB",
});

db.connect();

module.exports = db;