type Person = {
  type: 'person';
  name: string;
};

type Animal = {
  type: 'animal';
  cor: 'dark';
};

type PersonOrAnimal = Person | Animal;

function add(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
}

export class Student implements Person {
  type: 'person' = 'person';
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {
  // if('name' in obj) console.log(obj.name)
  // if (obj instanceof Student) console.log(obj.name);
  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      break;

    default:
      break;
  }
}

console.log(add(4, 9));

showName(new Student('Tarcisio'));
showName({ type: 'person', name: 'Tarcisio' });
