//async, await
//프로미스 깔끔하게 사용
//무조건 대체 사용은 아님!

//async
async function fetchUser() {
    return 'dada';
}
const user = fetchUser();
console.log(user);

//await
async function getApple() {
    await delay(3000);
    return 'apple';
}
async function getBanana() {
    await delay(3000);
    return 'banana';
}
async function pick() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return apple + banana;
}
pick().then(console.log);

//위의 코드를 깔끔하게 하는 프로미스 API
function pick2() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}
pick2().then(console.log);

//먼저 완료되는 것
function pick3() {
    return Promise.race([getApple(), getBanana()])
}
pick3().then(console.log);