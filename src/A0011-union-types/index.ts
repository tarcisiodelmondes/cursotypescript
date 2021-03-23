function addOrConcat(a: string | number, b: string | number) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 10));
console.log(addOrConcat('10', '10'));
console.log(addOrConcat('10', 10));
