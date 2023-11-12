"use strict";
/*
    1. private으로 설정된 속성은 dot으로 접근 불가
    2. 클래스 내부에서는 private 속성 사용 가능
    3. private이 붙은 변수나 함수는 _를 이름 앞에 붙임 > 코딩 컨벤션
*/
class C2_Person {
    constructor(name) {
        this.name = "Mark";
        this._age = 0;
        this.name = name;
    }
}
const c2_person = new Person("Mark");
console.log(c2_person);
