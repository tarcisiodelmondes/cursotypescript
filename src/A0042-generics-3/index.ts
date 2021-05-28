interface PersonProtocol<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  lastName: T;
  age: U;
};

const person1: PersonProtocol<string, number> = {
  name: 'Tarcisio',
  lastName: 'Delmondes',
  age: 18,
};

const person2: PersonProtocol = {
  name: 'Tarcisio',
  lastName: 'Delmondes',
  age: 18,
};

const person3: PersonProtocol2 = {
  name: 'Tarcisio',
  lastName: 'Delmondes',
  age: 18,
};

console.log(person1, person2, person3);
