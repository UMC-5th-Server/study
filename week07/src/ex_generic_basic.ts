function helloString(message: string): string {
    return message;
}

function helloString(message: any): any {
    return message;
}

function hello<T>(message: T): T {
    return message;
}

// 타입이 추론된 형태
hello('Mark').length;
hello(35);

// 타입이 명시적으로 표현된 형태
hello<string>(35);

const a: string[] = [];
const b: Array<string> = [];