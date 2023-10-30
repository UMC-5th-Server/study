const mysql = require("mysql");

const db = mysql.createConnection({
    host: " ",
    user: "admin",
    password: " ",
    database: " " // db name
});

db.connect();

module.exports = db;