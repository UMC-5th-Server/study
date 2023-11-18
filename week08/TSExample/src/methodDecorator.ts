function editable(canBeEditable: boolean) {
  return function (
    target: any,
    propName: string,
    description: PropertyDescriptor
  ) {
    console.log(target);
    console.log(propName);
    console.log(description);
    description.writable = canBeEditable; // 수정할 수 없도록 설정
  };
}

class Person2 {
  constructor() {
    console.log("new Person()");
  }

  @editable(true)
  hello() {
    console.log("hello");
  }
}

const p2 = new Person2();
p2.hello();
p2.hello = function () {
  console.log("World");
};
p2.hello();
