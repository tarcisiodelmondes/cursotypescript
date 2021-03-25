export class Person {
  static cpfDefault = '000.000.000-00';
  constructor(public name: string, public age: number, public cpf: string) {}

  static createPerson(name: string, age: number): Person {
    return new Person(name, age, this.cpfDefault);
  }
}

const person = Person.createPerson('Carla', 25);
console.log(person);
