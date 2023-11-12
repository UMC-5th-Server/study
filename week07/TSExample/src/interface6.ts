interface StringArray {
  [index: string]: string;
  name: string;
}

const sa: StringArray = {
  name: "이름", // 필수
};

sa[100] = "100";
sa.any = "any"; // 어떤 프로퍼티도 가능

/////////////////////////
interface StringArrayNo {
  [index: string]: string;
  // name: number; (X) 인덱서블 타입이 string값을 가지기 때문에 number를 필수로 끌어오면 에러
}
