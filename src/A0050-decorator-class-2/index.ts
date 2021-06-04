@decorator('param1', 'param2')
export class Animal {
  constructor(public color: string) {}
}

function decorator(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log(param1, ' ', param2);

    return class extends target {
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.color = 'Blue';
      }
    };
  };
}

const animal = new Animal('Red');
console.log(animal);
