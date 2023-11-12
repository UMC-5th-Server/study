"use strict";
class C7_Person {
    static getInstance() {
        if (C7_Person.Instance == null) {
            C7_Person.Instance = new C7_Person();
        }
        return C7_Person.Instance;
    }
    constructor() { }
    hello() { }
}
C7_Person.Instance = null;
const c7_person = C7_Person.getInstance();
c7_person.hello();
