export class Company {
  readonly name: string;
  protected contributors: Contributor[] = [];
  private cpnj: string;

  constructor(name: string, cpnj: string) {
    this.name = name;
    this.cpnj = cpnj;
  }

  addContributor(contributor: Contributor): void {
    this.contributors.push(contributor);
  }
}

export class Contributor {
  constructor(readonly name: string, readonly lastName: string) {}
}

export class Netflix extends Company {
  constructor() {
    super('Supercell', '63.829.476/0001-50');
  }

  popContributor(): Contributor | null {
    const contributor = this.contributors.pop();
    if (contributor) return contributor;
    return null;
  }
}

const company1 = new Netflix();
const contributor = new Contributor('Pedro', 'Silva');
company1.addContributor(contributor);
const contributor1 = new Contributor('Pedro', 'Silva');
company1.addContributor(contributor1);
company1.popContributor();
console.log(company1);
