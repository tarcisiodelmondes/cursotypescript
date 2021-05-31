export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
  const sumResult = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) return sum + value;

    return sum;
  }, 0);

  return sumResult;
}
console.log(sum(...[1, 2, 3, 4, 5, 6, 7, 'a', 's', 7]));
console.log(sum('a', 's', 'f', 'f', 'h'));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50));
