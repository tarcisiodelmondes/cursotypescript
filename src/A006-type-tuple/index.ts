// Tuple

const dataClient1: readonly [number, string] = [1, 'name'];
const dataClient2: [number, string, string] = [1, 'name', 'surname'];
const dataClient3: [number, string, string?] = [1, 'name'];
const dataClient4: [number, string, ...string[]] = [1, 'name'];

console.log(dataClient1);
console.log(dataClient2);
console.log(dataClient3);
console.log(dataClient4);

// readonly array
const array1: readonly string[] = ['a', 'b', 'c'];
const array2: ReadonlyArray<string> = ['a', 'b', 'c'];

console.log(array1);
console.log(array2);
