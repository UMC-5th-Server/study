// 1.callback 함수 구현

function printName(print, timeout) {
    setTimeout(print, timeout);
}
printName(() => console.log('Zyan'), 1000);

// 2. promise 구현

const getItem = () =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve('teddy bear'), 1000);
})
const getBox = item =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${item} => box`), 1000);
})
const present = box =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${box} => present`), 1000);
})

getItem()
.then(item => getBox(item))
.then(box => present(box))
.then(present => console.log(present));

// 3. async & await 구현

async function getName() {
    return 'Zyan';
}
async function getAge() {
    const name = await getName();
    return `${name} is 22.`;
}

getAge()
.then(age => console.log(age));