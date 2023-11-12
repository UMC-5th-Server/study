class C5_Person {
  constructor(protected _name: string, protected _age: number) {}

  hello(): void {
    console.log(this._name);
  }
}
const c5_person: C5_Person = new C5_Person("Mark", 35);
c5_person.hello();

class C5_Child extends C5_Person {
  _name: string = "Mark.JR";

  constructor() {
    super("Mark.JR", 5);
  }
}

const c5_child: C5_Child = new C5_Child();
c5_child.hello();
