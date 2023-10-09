### 1. 비동기 프로그램

- 자바스크립트 → 동기적(synchronous). hoisting (var, function 선언들이 자동적으로 제일 위로 올라가는 것)이 된 이후부터 코드가 나타나는 순서대로 자동적으로 실행됨.
- asynchronous : 비동기적. 언제 코드가 실행될지 예측할 수 없는 것.
  ex) setTimeout() ⇒ 웹 브라우저 제공 api. 지정한 시간이 지나면 콜백함수를 호출해라.
  콜백함수 → 전달해준 함수를 나중에 불러줘라 - 콜백 - 동기 콜백 (synchronous callback) - 비동기 콜백 (asynchronous callback)
      - 콜백 지옥
          콜백 안에 콜백 안에 콜백…
          → 가독성 떨어짐.


### 2. Promise

- 자바스크립트에서 제공하는 비동기를 간단하게 처리할 수 있도록 도와주는 내장Object.
- 정해진 장시간의 기능을 수행 후, (state == pending)
  - 정상적으로 기능 수행→ 성공메시지&처리된 결과값 전달. (fulfilled)
  - 기능 수행 중 예상치 못한 문제 발생 → 에러 전달해줌. (rejected)

\*\* promise 안에서 무거운 일들을 주로 처리함. 큰 데이터를 읽어오는 과정은 시간이 걸림. 파일을 읽거나 네트워크에서 데이터를 받아오는 동안 다른 일을 할 수 있도록 하기 위해 비동기적으로 처리함.

- Producer vs Consumer (producer를 통해 만들면 consumer에서 사용)
  - Producer (원하는 기능을 수행해서 해당하는 기능을 만들어내는 것)
    - 새로운 Promise가 만들어질 때는, 우리가 전달한 executor라는 함수가 자동적으로 바로 실행됨.
      ex) 네트워크 통신 관련함수를 만들었다? promise를 만난 순간 바로 실행됨.
      → 만약 네트워크 요청을 사용자가 요구했을 때만 해야하는 경우 (버튼을 눌렀을 경우), 사용자가 요구하지도 않았는데 불필요한 네트워크 통신이 일어나게 됨. 따라서 유의해야함.
  - Consumer (원하는 데이터를 소비하는 것)
    then(성공 시), catch(실패 시), finally(무조건 마지막에 실행)
- Promise chaining
  여러 가지를 동시에 묶어서 다른 비동기적인 것들을 묶어서 처리할 수 있음.
- Error Handling

### 3. Async + Await

→ promise를 더 간결, 간단하게 깔끔하게 사용하는 것. 동기처럼 보이도록 해줌. (기존에 존재하는 것 위에, 혹은 감싸서 더 간편하게 해줌. 이를, syntactic sugar 라고 부름)

- async
- await
  async가 붙은 함수 안에서만 쓸 수 있음.
  - useful Promise APIs
