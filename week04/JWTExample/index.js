const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.use(express.json()); // Add this middleware to parse JSON in request bodies

app.get("/api", function (req, res) {
  res.json({
    text: "my api",
  });
});

// Token 발급
app.post("/api/login", function (req, res) {
  // Auth user
  const user = { id: 3 };
  const token = jwt.sign({ user }, "my_secret_key");
  res.json({
    token: token,
  });
});

// Token 검증
app.get("/api/protected", ensureToken, function (req, res) {
  jwt.verify(req.token, "my_secret_key", function (err, data) {
    // Fix typo and callback
    if (err) {
      console.log("에러 발생:", err); // Log the error message
      res.sendStatus(403);
    } else {
      res.json({
        text: "this is protected",
        data: data,
      });
    }
  });
});

// 헤더에서 토큰 추출
function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"]; // Fix typo in "authorization"
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next(); // Call next to continue to the next middleware
  } else {
    res.sendStatus(403);
    console.log("에러 발생: 토큰이 없습니다."); // Log the error message
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
