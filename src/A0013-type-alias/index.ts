type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  corPrefered?: string;
};

type CorRGB = 'RED' | 'GREEN' | 'BLUE';
type CorCMYK = 'YELLOW' | 'BLACK' | 'CYAN' | 'MAGENTA';
type CorPrefered = CorRGB | CorCMYK;

const person: Person = {
  name: 'Tarcisio',
  age: 19,
  salary: 200_000,
};

function setCorPrefered(person: Person, cor: CorPrefered): Person {
  return {
    ...person,
    corPrefered: cor,
  };
}

console.log(setCorPrefered(person, 'CYAN'));
console.log(person);

export default 1;
