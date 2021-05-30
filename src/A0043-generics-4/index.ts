type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (object, key) => object[key];

const animal = {
  cor: 'yellow',
  vaccines: ['vaccines 1', 'vaccines 2', 'vaccines 3'],
  age: 22,
};

const vaccines = getKey(animal, 'vaccines');
const cor = getKey(animal, 'cor');
const age = getKey(animal, 'age');

console.log(vaccines, cor, age);
