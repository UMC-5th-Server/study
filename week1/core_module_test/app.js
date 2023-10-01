// core module - readline
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What is your name ? ", (answer) => {
//   console.log("Hello " + answer);

//   rl.close(); // 이걸 넣어주면 answer 받고 종료됨
// });

// core module - file system
const fs = require("fs");

// 작성
// fs.writeFileSync("./hello.txt", "Hello youtubers");

// 불러오기
// const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
// console.log(data);

// 추가
// fs.appendFileSync("./hello.txt", "\nWelcome!");

// 현재 경로
const list = fs.readdirSync(".");
console.log(list);
