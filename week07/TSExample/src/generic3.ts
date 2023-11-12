class G3_Person<T extends string | number> {
  private name: T;

  constructor(name: T) {
    this.name = name;
  }
}

// new G3_Person(false);
new G3_Person(35);
new G3_Person("Hello");
