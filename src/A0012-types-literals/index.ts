let x = 10; // eslint-disable-line
x = 0b1010;
const y = 100;
const a = 100;

const person = {
  name: 'Tarcisio' as const,
  lastName: 'Delmondes',
};

function choiceColor(cor: 'RED' | 'YELLOW' | 'BLUE') {
  return cor;
}

console.log(choiceColor('BLUE'));

export default 1;
