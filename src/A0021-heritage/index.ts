export class Person {
  constructor(public name: string, public lastName: string) {}

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

export class Student extends Person {
  constructor(name: string, lastName: string, public room: string) {
    super(name, lastName);
  }
  getFullName(): string {
    return `This comes of the student ${this.name} ${this.lastName} ${this.room}`;
  }
}

export class Client extends Person {
  constructor(name: string, lastName: string, public room: string) {
    super(name, lastName);
  }
  getFullName(): string {
    return `This comes of the client ${this.name} ${this.lastName} ${this.room}`;
  }
}

const person = new Person('Tarcisio', 'Delmondes');
const student = new Student('Julia', 'Alves', 'A1');
const client = new Client('Maria', 'Silva', 'AB');

console.log(person.getFullName());
console.log(student.getFullName());
console.log(client.getFullName());
