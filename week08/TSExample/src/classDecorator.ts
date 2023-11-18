function hello(target: Function) {
  target.prototype.hello = function () {
    console.log("hello");
  };
}

@hello
class Person {}

const p = new Person();
(<any>p).hello(); // spring aop와 유사
