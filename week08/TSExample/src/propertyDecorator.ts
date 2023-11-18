function writable(canBeWritable: boolean) {
  return function (target: any, propName: string): any {
    console.log(target);
    console.log(propName);

    return {
      writable: canBeWritable,
    };
  };
}

class Person3 {
  @writable(true)
  name: string = "Jay";
  constructor() {
    console.log("new Person()");
  }
}

const p3 = new Person3();
console.log(p3.name);
