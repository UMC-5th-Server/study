#동기와 비동기
- 동기(Synchronous) : 순서대로. 요청과 결과가 동시 (하나의 요청만 처리)
- 비동기(Asynchronous) : 요청과 결과가 동시X, 여러 개의 요청을 동시에 처리

자바스크립트는 동기적
- 선언들이 제일 먼저 작동 (hosting) -> 선언을 제외한 명령들을 순서대로 작동

setTimeout(콜백함수, 시간);같이 시간 후에 실행되는 것을 비동기 처리   


#Promise
- Promise: 자바스크립트 내장 오브젝트. 비동기 실행 시, 콜백 대신 사용 가능

1. state : 프로세스의 상태 체크
    pendding(요청 수행 중) 
    fulfilled(성공, 완료)
    rejected(파일 찾을 수 없음, 네트워크 문제 발생)
2. producer(제공자)와 comsumer(소비자)의 구분
    producer: Promise를 생성, 선언
    comsumer: Promise를 사용
 
* Promise는 생성되자마자 전달된 콜백함수 실행

//producer
new Promise((resolve, reject) => {콜백함수});

예시>
const promise = new Promise((resolve, reject) => {
    resolve('dada');    //성공. then으로 전달
    reject(new Error('no net')); //에러. catch로 전달
});


//comsumer
//then, catch, finally
promise
    .then((value) => {
        console.log(value);     //resolve의 인자가 value로 전달
    })
    .catch(error => {
        console.log(error); 
    })
    .finally(() => {            //성공 실패에 관련 없이 호출
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
getHen()
    .then(getEgg)
    .catch(error => {   //getEgg에서 발생하는 에러 처리
        return 'bread';
    })
    .then(cook)
    .then(console.log) //매개변수 생략 가능 
    .catch(console.log)


//async, await
프로미스를 간결, 간편, 동기적으로 실행되는 것 처럼 보이게
동기식으로 간편하게 코드 작성
syntactic sugar

프로미스는 then을 무조건 사용해야함

함수 앞에 async를 붙이면 함수가 비동기로 변화
async함수 안에 await 명령;을 쓰면 명령 실행이 끝날 때까지 기다리고  그 다음에 아래의 코드를 이어서 실행

에러처리는 try, catch문

Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));

//먼저 완료되는 것
Promise.race([getApple(), getBanana()])      