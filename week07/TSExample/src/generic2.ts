class G2_Person<T> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

const mark = new G2_Person("Mark");
new G2_Person<number>(35);
