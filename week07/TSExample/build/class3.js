"use strict";
class C3_Person {
    constructor() {
        this._name = "Mark";
        this._age = 0;
    }
}
class Child extends C3_Person {
    constructor() {
        super();
        this._name = "아들";
    }
}
const c3_person = new Child();
