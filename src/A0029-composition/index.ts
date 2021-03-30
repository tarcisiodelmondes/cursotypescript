export class Car {
  private readonly engine = new Engine();

  turnOn(): void {
    this.engine.turnOn();
  }

  accelerate(): void {
    this.engine.accelerate();
  }

  stop(): void {
    this.engine.stop();
  }

  off(): void {
    this.engine.off();
  }
}

export class Engine {
  turnOn(): void {
    console.log('The engine is starting');
  }

  accelerate(): void {
    console.log('The engine is accelerating');
  }

  stop(): void {
    console.log('Engine is stopped');
  }

  off(): void {
    console.log('Engine are off');
  }
}

const car = new Car();

car.turnOn();
car.accelerate();
car.stop();
car.off();
