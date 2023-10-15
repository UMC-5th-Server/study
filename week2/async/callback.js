'use strict';
// 자바스크립트는 동기적
// 선언들이 제일 먼저 작동 (hosting) -> 코드 순서대로

// 1 3 2
console.log('1');
setTimeout(() => console.log('2'), 1000);    
//작동 시켜놓고 다음으로 넘어감
console.log('3'); 


//Synchronous callback 동기적, 즉각적
function printImmediately(print) {
    print();
}   //선언은 맨 위로..
printImmediately(console.log('hello'));


//ASynchronous callback 비동기적
function printWithDelay(print, timeout) {
    setTimeout(print, timeout)
}   //선언은 맨 위로..
printWithDelay(() => console.log('ASynchronous callback'), 2000);


//Callback Hell ex
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if(
                (id === 'dada' && password === 1111) ||
                (id === 'coder' && password === 1111)
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if(user === 'dada') {
                onSuccess({ name: 'dada', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('id: ');
const pw = prompt('pw: ');
userStorage.loginUser(
    id, 
    pw, 
    user => {
        userStorage.getRoles(user, 
            userWithRule => {
                alert(`hello ${userWithRule.name}! you are ${userWithRule.role}`)
            },
            error => {}
            );
    }, 
    error => {console.log(error)}
);
