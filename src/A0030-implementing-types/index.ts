type PersonType = {
  name: string;
  lastName: string;
};

type FullName = {
  fullName(): string;
};

export class Person implements PersonType, FullName {
  constructor(public name: string, public lastName: string) {}

  fullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const person = new Person('Tarcisio', 'Delmondes');
console.log(person.fullName());
