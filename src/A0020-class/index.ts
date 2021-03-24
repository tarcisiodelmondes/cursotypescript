export class Company {
  readonly name: string;
  private contributors: Contributor[] = [];
  protected cpnj: string;

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

const company1 = new Company('Supercell', '63.829.476/0001-50');
const contributor = new Contributor('Pedro', 'Silva');
company1.addContributor(contributor);
const contributor1 = new Contributor('Pedro', 'Silva');
company1.addContributor(contributor1);

console.log(company1);
