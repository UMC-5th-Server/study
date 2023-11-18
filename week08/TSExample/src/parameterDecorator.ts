function printInfo(
  target: any,
  methodName: string | undefined,
  paramIndex: number
) {
  console.log(target);
  console.log(methodName);
  console.log(paramIndex);
}

class Person4 {
  private _name: string;
  private _age: string;

  constructor(name: string, @printInfo age: string) {
    this._name = name;
    this._age = age;
  }

  hello(@printInfo message: string) {
    console.log(message);
  }
}

const p4 = new Person4("Jay", "23");
