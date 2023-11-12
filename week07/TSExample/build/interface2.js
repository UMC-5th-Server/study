"use strict";
const person = {
    name: "Mark",
    hello: function () { },
    hello1() {
        return "Hello";
    },
};
function hello(p) {
    console.log(`안녕하세요 ${p.name} 입니다.`);
}
