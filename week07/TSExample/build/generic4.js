"use strict";
// type Test = keyof G4_Person;
function getProperty(obj, key) {
    return obj[key];
}
const g4_person = {
    name: "Mark",
    age: 35,
};
getProperty(g4_person, "age");
