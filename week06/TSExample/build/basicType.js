"use strict";
// 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
// primitive 형의 내장 함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분
let input = "mark";
// boolean과 Boolean은 다름
// boolean : true, false값만 가질 수 있는 원시 데이터 타입
// Boolean : true, false 같은 boolean값을 포장해서 객체로 만듬 (거의 사용하지 않음)
let isOk = true;
let isNotOk = new Boolean(false);
// TS의 모든 숫자는 부동 소숫점 값
// TS는 16진수, 10진수 외에 2진수, 8진수도 지원
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// Template String : 행에 걸쳐 있거나 표현식을 넣을 수 있는 문자열
// backtick 기호에 둘러쌓여 있음 + 표현식은 '${expr}'
let fullName = "Bod Bobbington";
let age = 37;
let sentence = `Hello My name is ${fullName}.
I'll be ${age + 1} years old next month.`;
// undefined, null은 소문자만 존재
// void와 마찬가지로 그 자체로는 쓸모가 없지만 모든 타입의 서브 타입
let n = null;
console.log(n);
function returnVoid(message) {
    console.log(message);
}
returnVoid("Test");
// any : 어떤 타입이어도 상관없는 타입 (최대한 쓰지 않는게 좋다)
// 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않음
// noImplicitAny : 컴파일 옵션 중 any를 쓰면 오류를 뱉도록 하는 옵션 (그냥 babel 쓰는게 ^^)
function returnAny(message) {
    console.log(message);
}
returnAny("Test");
// Never : 리턴에 주로 사용
function error(message) {
    throw new Error(message);
}
// Array : 배열 객체
// Array<Type> or Type[]
let list = [1, 2, 3];
let list1 = [1, 2, 3];
// Tuple : 배열 + 여러가지 타입 함께 사용 가능한 객체
let x;
x = ["hello", 1];
console.log(x[0].toString());
// Enum : 원소는 string형
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let color = Color.Green;
// Symbol : 프리미티브 타입의 값을 담아서 사용
// 고유하고 수정불가능한 값으로 생성
// 주로 접근 제어용으로 사용
let sym = Symbol();
let obj = {
    [sym]: "value",
};
console.log(obj[sym]);
