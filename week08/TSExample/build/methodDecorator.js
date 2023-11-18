"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function editable(canBeEditable) {
    return function (target, propName, description) {
        console.log(target);
        console.log(propName);
        console.log(description);
        description.writable = canBeEditable; // 수정할 수 없도록 설정
    };
}
class Person2 {
    constructor() {
        console.log("new Person()");
    }
    hello() {
        console.log("hello");
    }
}
__decorate([
    editable(true)
], Person2.prototype, "hello", null);
const p2 = new Person2();
p2.hello();
p2.hello = function () {
    console.log("World");
};
p2.hello();
