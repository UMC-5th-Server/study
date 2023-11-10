1. Interface

- 객체의 구조를 만들어 사용
- 선택적 프로퍼티(:?) 사용 가능

2. Class

class 만들기
- 생성자 함수가 없으면, 디폴트 생성자가 호출
- 클래스의 멤버 변수가 정의되어 있지만, 값을 대입하지 않으면 undefined
=> 오브젝트에 프로퍼티가 아예 존재하지 않음
- 접근제어자는 public이 디폴트

class와 property
- 클래스의 프로퍼티를 선언과 동시에 값을 할당하는 방법도 있음
- 생성자가 호출되기 전에 이미 값이 할당되어 있음

class와 상속
- 생성자를 정의한 후, this를 사용하려면 super를 통해 부모의 생성자를 호출해줘야 함
- super를 호출할 때는 부모 생성자의 입력 타입이 같아야 함
- super를 호출하는 것은 클래스 외부에서 호출하는 것과 같음
- protected 함수를 호출해서 그 안의 private을 출력하는 것에 주의

class와 static property
- static 키워드를 붙인 프로퍼티는 클래스.프로퍼티로 사용
- static 프로퍼티에 private, protected를 붙이면 똑같이 동작

3. Generic

- any 대신 사용
- array에 사용 가능
- multiple types 사용 가능