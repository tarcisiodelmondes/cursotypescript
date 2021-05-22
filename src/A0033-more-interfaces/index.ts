// Declaration merging

interface Person {
  name: string;
}

interface Person {
  readonly lastName: string;
}
interface Person {
  age?: number;
}

const person: Person = {
  name: 'Tarcisio',
  lastName: 'Delmondes',
};

console.log(person);
