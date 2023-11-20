// ### 1. iterator (반복자)

// - for..of
//     - es3
//         - for(var i = 0; i < array.length; i++)
//     - es5
//         - arrayforEach
//             - return 으로 순회를 탈출할 수 없다.
//     - es6
//         - for (const item of array)
//             - 배열에서만 사용이 가능
// - for..in
//     - 배열을 순회할 때는 사용하지 않을 것 → for..of사용
//     - index가 number가 아니라 string으로 나옴
//     - 루프가 무작위로 순회할 수도 있음
//     - 객체 순회시 for (const prop of Object.keys(obj))도 사용할 수 있음.
// - Symbol.iterator
//     - 프로퍼티이며, 함수가 구현되어있으면, iterable이라고 함.
//     - Array, Map, Set, String, Int32Array, Unit32Array, etc. 에는 내장된 구현체가 있으므로 이터러블 하다.
//     - 그냥 객체는 이터러블하지 않다.
//     - 이터레이터를 통해 이터러블한 객체의 Symbol.iterator 함수를 호출한다.
//     - es3 or es6
//         - Array에만 for..of 사용 가능
//         - 일반 객체에 사용하면 오류
//     - es6
//         - Symbol.iterator 함수를 구현하면 어떤 객체에도 for..of 사용 가능

//     class CustomIterable implements Iterable<string> {
//     	private _array: Array<string> = ['first', 'second'];

//     	[Symbol.iterator] () {
//     		var nextIndex = 0;

//     		return {
//     			next: () => {
//     				return {
//     					value: this._array[nextIndex++],
//     					done: nextIndex < this._array.length
//     				}
//     		}
//     	}
//     }

//     const cIterable = new CustomIterable();

//     for(const item of cIterable) {
//     		console.log(item);
//     }
