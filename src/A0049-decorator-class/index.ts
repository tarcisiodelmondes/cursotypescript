@decorator
export class Animal {
  constructor(public color: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = 'Blue';
    }
  };
}

const animal = new Animal('Red');
console.log(animal);
