const ObjectA: {
  readonly keyA: string;
  keyB: string;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

ObjectA.keyB = 'Other value';

console.log(ObjectA);
