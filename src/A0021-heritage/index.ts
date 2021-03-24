export class Person {
  constructor(public name: string, public lastName: string) {}

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

export class Student extends Person {
  getFullName(): string {
    return `This comes of the student ${this.name} ${this.lastName}`;
  }
}

export class Client extends Person {
  getFullName(): string {
    return `This comes of the client ${this.name} ${this.lastName}`;
  }
}

const person = new Person('Tarcisio', 'Delmondes');
const student = new Student('Julia', 'Alves');
const client = new Client('Maria', 'Silva');

console.log(person.getFullName());
console.log(student.getFullName());
console.log(client.getFullName());
