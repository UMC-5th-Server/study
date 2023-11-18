class CustomIterable1 implements Iterable<string> {
  private _array: Array<string> = ["first", "second"];

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
