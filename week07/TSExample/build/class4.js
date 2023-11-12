"use strict";
class C4_Person {
    constructor(name, age) {
        this._name = "Mark";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    hello() {
        console.log(this._name);
    }
}
const c4_person = new C4_Person("Mark", 35);
c4_person.hello();
