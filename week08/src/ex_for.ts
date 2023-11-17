//배열에 for..of 이용
for (const item of array) {
    console.log(typeof item + ', ' + item);
}

//배열에 for..in 이용
//item이 string 타입의 숫자
for (const item in array) {
    console.log(typeof item + ', ' + item);
}

//배열에 for..in 이용
for (const item in obj) {
    console.log(typeof item + ', ' + item);
}

//객체의 keys 들에 for..of 이용
for (const item of Object.keys(obj)) {
    console.log(typeof item + ', ' + item);
}