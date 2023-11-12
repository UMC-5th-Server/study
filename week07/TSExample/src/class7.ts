class C7_Person {
  private static Instance: C7_Person | null = null;
  public static getInstance(): C7_Person {
    if (C7_Person.Instance == null) {
      C7_Person.Instance = new C7_Person();
    }

    return C7_Person.Instance;
  }

  private constructor() {}

  hello() {}
}

const c7_person = C7_Person.getInstance();
c7_person.hello();
