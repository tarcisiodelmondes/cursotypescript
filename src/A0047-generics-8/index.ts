// Record
const object1: Record<string, string | number> = {
  name: 'Tarcisio',
  lastName: 'Delmondes',
  age: 18,
};

console.log(object1);

type PersonProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
};

// Required
const personRequired: Required<PersonProtocol> = {
  name: 'Tarcisio',
  lastName: 'Delmondes',
  age: 18,
};

console.log(personRequired);

// Partial
const personPartial: Partial<PersonProtocol> = {
  name: 'Tarcisio',
};

console.log(personPartial);

// Readonly
const personReadonly: Readonly<PersonProtocol> = {
  name: 'Tarcisio',
  lastName: 'Delmondes',
  age: 18,
};

console.log(personReadonly);

// Pick
const personPick: Pick<PersonProtocol, 'name' | 'age'> = {
  name: 'Tarcisio',
  age: 18,
};

console.log(personPick);

// Extract and Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type ExtractType = Extract<ABC, CDE>;
type ExcludeType = Exclude<ABC, CDE>;

// Module mode
export default 1;
