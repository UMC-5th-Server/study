// 클래스와 getter, setter

interface C6_IPerson {
  getName(): string;
}

abstract class APerson {
  abstract setName(name: string): void;
}

class C6_Person extends APerson implements C6_IPerson {
  static height: number = 160;
  constructor(private _name: string, private _age: number) {
    super();
  }

  hello(): void {
    console.log(this._name);
  }

  getName(): string {
    return this._name;
  }

  setName(newName: string) {
    this._name = newName;
  }
}

const c6_person: C6_IPerson = new C6_Person("Mark", 35);
console.log(C6_Person.height);
