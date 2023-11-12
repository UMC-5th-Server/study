function helloString(message: string): string {
  return message;
}

function helloNumber(message: any): any {
  return message;
}

function helloGeneric<T>(message: T): T {
  return message;
}

helloString("Mark");
helloGeneric<string>("Mark");
helloGeneric("Mark").length;

const a: string[] = [];
const b: Array<string> = [];

function hello1<T>(messages: T[]) {
  return messages;
}

hello1<string>(a);
