'use strict';

/*
promise는 자바스크립트 내장 오브젝트
비동기 실행 시, 콜백 대신 사용 가능
1. state : 프로세스의 상태 체크
    pendding(요청 수행 중) 
    fulfilled(성공, 완료)
    rejected(파일 찾을 수 없음, 네트워크 문제 발생)
2. producer(제공자)와 comsumer(소비자)의 구분
*/

//producer
const promise = new Promise((resolve, reject) => {
    //heavy work (네트워크 통신, 파일 접근)
    console.log('doing..');
    setTimeout(()=>{
        //resolve('dada');
        reject(new Error('no net')); //catch로 전달
        //Uncaught (in promise) Error: no net at promise.js:19:16
    }, 2000);
});     // 프로미스 생성되자마자 전달된 콜백함수 실행


//comsumer
//then, catch, finally
promise
    .then((value) => {
        console.log(value);     //resolve의 인자가 value로 전달
    })
    .catch(error => {
        console.log(error); 
    })
    .finally(() => {    //성공 실패에 관련 없이 호출
        console.log('fin'); 
    });

//promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
});

fetchNumber
    .then(num => num*2)
    .then(num => num*3)
    .then(num => {
        setTimeout(()=> resolve(num-1), 1000)
    })
    .then(num => console.log(num));

//Error handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`${hen} => egg`), 1000));
    });
const cook = egg =>
     new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => cook`), 1000);
    });
getHen()
    .then(getEgg)
    .catch(error => {   //getEgg에서 발생하는 에러 처리
        return 'bread';
    })
    .then(cook)
    .then(console.log) //매개변수 생략 가능 
    .catch(console.log)