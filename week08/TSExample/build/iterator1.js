"use strict";
class CustomIterable1 {
    constructor() {
        this._array = ["first", "second"];
    }
    [Symbol.iterator]() {
        var nextIndex = 0;
        return {
            next: () => {
                return {
                    value: this._array[nextIndex],
                    done: nextIndex < this._array.length,
                };
            },
        };
    }
}
const cIterable1 = new CustomIterable1();
for (const item of cIterable1) {
    console.log(item);
}
