class C4_Person {
  protected _name: string = "Mark";
  private _age: number = 0;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  hello(): void {
    console.log(this._name);
  }
}
const c4_person: C4_Person = new C4_Person("Mark", 35);
c4_person.hello();
