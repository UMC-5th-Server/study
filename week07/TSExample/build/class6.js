"use strict";
// 클래스와 getter, setter
class APerson {
}
class C6_Person extends APerson {
    constructor(_name, _age) {
        super();
        this._name = _name;
        this._age = _age;
    }
    hello() {
        console.log(this._name);
    }
    getName() {
        return this._name;
    }
    setName(newName) {
        this._name = newName;
    }
}
C6_Person.height = 160;
const c6_person = new C6_Person("Mark", 35);
console.log(C6_Person.height);
