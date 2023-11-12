interface KPerson {
  name: string;
  age?: number;
}

interface Korean extends KPerson {
  city: string;
}

const k: Korean = {
  name: "정채원",
  city: "서울",
};
