export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected life: number,
    protected attack: number,
  ) {}

  toAttack(character: Character): void {
    this.speak();
    character.loseLife(this.attack);
  }

  loseLife(forceAttack: number): void {
    this.life -= forceAttack;
    this.life <= 0
      ? console.log(`${this.emoji} - ${this.name} morreu`)
      : console.log(
          `${this.emoji} - ${this.name} now has ${this.life} of life`,
        );
  }

  abstract speak(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  speak(): void {
    console.log(
      `${this.emoji} - ${this.name} says: "I go destroy it in pieces" (attack)`,
    );
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';
  speak(): void {
    console.log(
      `${this.emoji} - ${this.name} says: "You not can me win, I am more strong" (attack)`,
    );
  }
}

const warrior = new Warrior('Garen', 1200, 1900);
const monster = new Monster('Eren', 1900, 100);

warrior.toAttack(monster);
console.log('----------------------------------------------------');

monster.toAttack(warrior);
console.log('----------------------------------------------------');

console.log(warrior, monster);
