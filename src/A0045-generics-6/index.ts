export function unionObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return { ...obj1, ...obj2 };
}

const obj1 = {
  name: 'Tarcisio',
  lastName: 'Delmondes',
};

const obj2 = {
  age: 18,
};

const union = unionObjects(obj1, obj2);
console.log(union);
