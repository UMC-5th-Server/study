"use strict";
// indexable type
const i1_p = {
    name: "Mark",
};
i1_p.anybody = "anna";
function helloInterface(p) {
    console.log(`안녕하세요 ${p.name} 입니다.`);
}
const p2 = {};
p2[0] = "hi";
