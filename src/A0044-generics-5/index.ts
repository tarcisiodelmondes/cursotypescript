export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Pile<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  isEmpty(): boolean {
    return this.counter === 0;
  }

  push(element: T): void {
    this.elements[this.counter] = element;

    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return;

    this.counter--;

    const element = this.elements[this.counter];

    delete this.elements[this.counter];

    return element;
  }

  showPile(): void {
    for (const i in this.elements) {
      console.log(this.elements[i]);
    }
  }
}

const pile = new Pile<number>();

pile.push(1);
pile.push(2);
pile.push(3);
pile.push(4);

pile.showPile();

const pilePop = pile.pop();
console.log(pilePop);

while (!pile.isEmpty()) {
  pile.pop();
}

pile.showPile();
