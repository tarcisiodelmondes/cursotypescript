interface Name {
  name: string;
}

interface LastName {
  lastName: string;
}

interface FullName {
  fullName(): string;
}

interface PersonName extends Name, LastName, FullName {}

export class Person implements PersonName {
  constructor(public name: string, public lastName: string) {}

  fullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const person = new Person('Tarcisio', 'Delmondes');
console.log(person.fullName());
