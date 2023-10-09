"use strict";

// Promise is a JavaScript object fro asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("ellie"); // 성공시 받아온 데이터를 resolve()를 통해 받아오면 됨
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers : then, catch, finally를 이용해서 값을 받아올 수 잇음.
promise
  .then((value) => {
    // 정상적으로 실행된다면, resolve에서 받은 값이 value로
    console.log(value);
  })
  .catch((error) => {
    // 에러 발생시
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
}); // 1초뒤 숫자1 전달

fetchNumber
  .then((num) => num * 2) // 2
  .then((num) => num * 3) // 6
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 5
    });
  })
  .then((num) => console.log(num)); // 5
// 실행되기까지 2초 걸림

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

// const getEgg = (hen) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${hen} => 🥚`), 1000);
//   });

// 에러 발생시
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));
// 위의 코드 이렇게 가능 ->

getHen() //
  .then(getEgg)
  .catch((error) => {
    return "🥖"; // 에러 시, 빵으로 대처해서 문제 해결
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
