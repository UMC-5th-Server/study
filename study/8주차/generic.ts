function sort<T>(item: T[]): T[] {
    return item.sort();
}

const nums: number[] = [1, 2, 3, 4];
const chars: string[] = ["a", "b", "c", "d", "e", "f", "g",];

sort<number>(nums);
sort<string>(chars);

function logText<T>(text: T): T {
    return text;
}
// 1과 2는 같은 의미
// #1
let str: <T>(text: T) => T = logText;
// #2
let str: { <T>(text: T): T } = logText;

interface GenericLogTextFn {
    <T>(text: T): T;
}
function logText<T>(text: T): T {
    return text;
}
let myString: GenericLogTextFn = logText; // Okay

// 인터페이스에 인자 타입을 강조
interface GenericLogTextFn<T> {
    (text: T): T;
}
function logText<T>(text: T): T {
    return text;
}
let myString: GenericLogTextFn<string> = logText;