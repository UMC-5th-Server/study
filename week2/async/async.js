// async & await
// clear style of using promise

// 1. async
async function fetchUser() {
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
} // 정해진 ms가 지나면 resolve를 호출

async function getApple() {
  await delay(1000); // delay가 끝날때까지 기다려줌.
  // throw 'error';  // 에러 발생. 아래에서 try-catch 해주면 됨
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// function getBanana() {
//   return delay(3000).then(() => "🍌");
// }

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// 콜백 지옥과 비슷. 따라서 async 사용

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // 위에 코드로 인해 동시. 병렬적으로 수행됨.
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs (위에 병렬 코드를 깔끔한 코드로)
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// 둘 중 먼저 수행되는 애가 출력됨
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
