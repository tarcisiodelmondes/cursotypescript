let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);

if (squareOfTwoNumber === null) console.log('Conta invalida');
else console.log(squareOfTwoNumber * 2);
