type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };

type Person = HasName & HasLastName & HasAge;

type AB = 'A' | 'B';
type AC = 'C' | 'A';

type intersection = AB & AC;

const person: Person = { name: 'Tarcisio', age: 19, lastName: 'Delmondes' };

console.log(person);

export default 1;
