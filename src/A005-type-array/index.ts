// Array<T> - T[]

function multNumber(...args: Array<number>) {
  return args.reduce((acc, value) => acc * value, 1);
}

function concatenaString(...args: string[]) {
  return args.join('');
}

function upperCase(...args: string[]) {
  return args.map((value) => value.toUpperCase());
}

const resultMult = multNumber(1, 2, 3);
const resultConcatena = concatenaString('1', '2', '3');
const resultUppercase = upperCase('a', 'b', 'c');

console.log(resultMult);
console.log(resultConcatena);
console.log(resultUppercase);

// Module mode
export default 1;
