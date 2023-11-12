"use strict";
class Person {
    constructor(name) {
        this.name = "";
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요 ${this.name} 입니다.`);
    }
}
const p = new Person("Mark");
p.hello();
