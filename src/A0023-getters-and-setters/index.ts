export class Person {
  constructor(private _cpf: string) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf;
  }
}

const person = new Person('111.111.111-11');

// Getter
console.log(person.cpf);

// Setter
console.log((person.cpf = '000.000.000-00'));
