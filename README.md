
동기 : 순차적으로 처리. 하나의 요청이 오면 완료가 된 후 다음 요청을 실행하는 방식
비동기 : 동시 처리 가능. 하나의 요청이 완료되기 전에 다음 요청을 실행하는 방식. 처리 순서 예측 X

//비동기적으로 실행하기 위해서

1. callback 함수 이용

callback 함수 : 다른 함수가 실행을 끝낸 후에 실행되는 함수
어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수

파라미터를 함수로 받아서 사용할 수 있는데 그 함수는 callback임

동기 callback / 비동기 callback

2. promise 이용

callback 함수를 사용하다 보면 코드가 복잡하고 가독성이 떨어지는 문제 발생.
또한 콜백 함수가 중첩되어 코드의 깊이가 깊어지는 현상 발생 -> 콜백 지옥

promise : 비동기 처리에 사용되는 객체

처리 성공 : resolve(data) 호출 후 바로 .then()으로 이어짐
* resolve()의 매개변수 값이 then 메서드의 인자로 들어감

처리 실패 : reject(error) 호출 후 바로 .catch()로 이어짐

.finally()
성공과 실패 여부에 상관 없이 반드시 실행

3. async / await 이용

async : 함수 앞에 키워드로 사용하면 promise 코드를 직관적으로 나타낼 수 있음
자동으로 promise 객체로 인식되고, return 값은 resolve() 값과 동일

await : promise가 완료될 때까지 대기. promise가 resolve한 값을 줌
