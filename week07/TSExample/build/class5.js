"use strict";
class C5_Person {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    hello() {
        console.log(this._name);
    }
}
const c5_person = new C5_Person("Mark", 35);
c5_person.hello();
class C5_Child extends C5_Person {
    constructor() {
        super("Mark.JR", 5);
        this._name = "Mark.JR";
    }
}
const c5_child = new C5_Child();
c5_child.hello();
