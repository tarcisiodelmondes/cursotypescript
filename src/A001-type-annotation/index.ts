/* eslint-disable */

// Types basic (here occurs inference of types)
const name: string = 'Tarcisio';
const age: number = 19;
const adult: boolean = true;
const symbol: symbol = Symbol('Qualque Symbol');
// const big: bigint = 50n

// Array
const arrayOfNumber1: Array<Number> = [1, 2, 3, 4];
const arrayOfNumber2: number[] = [1, 2, 3, 4];
const arrayOfString1: Array<String> = ['a', 'b', 'c'];
const arrayOfString2: string[] = ['a', 'b', 'c'];

// Objects
const pessoa: { name: string; age: number; adult?: boolean } = {
  name: 'Tarcisio',
  age: 19,
};

// Functions
function sum1(x: number, y: number) {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;

// Module mode
export default 1;
