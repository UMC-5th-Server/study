const express = require("express");
const app = express();

// mysql connection
const mysql = require("mysql2");
const db = require("./models");
const User = db.User;

db.sequelize.sync().then((req) => {
  app.listen(3000, () => {
    console.log("Port 3000 Server running!");
  });
});

// 조회 API
app.get("/select", (req, res) => {
  User.findAll({
    where: {
      name: "Chaewon",
    },
  })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

// 삭제 API
app.delete("/delete", (req, res) => {
  User.destroy({ where: { id: 1 } })
    .then(() => {
      res.send("delete successful");
    })
    .catch((err) => {
      res.status(500).send("delete failed");
      console.log(err);
    });
});

// 추가 API
app.post("/insert", (req, res) => {
  User.create({
    name: "Chaewon",
    age: 23,
  }).catch((err) => {
    if (err) {
      console.log(err);
    }
  });

  res.send("insert successful");
});
