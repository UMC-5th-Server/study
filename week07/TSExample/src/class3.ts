class C3_Person {
  protected _name: string = "Mark";
  private _age: number = 0;
}

class Child extends C3_Person {
  constructor() {
    super();
    this._name = "아들";
  }
}

const c3_person: Child = new Child();
