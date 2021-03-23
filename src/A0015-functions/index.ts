type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callback: MapStringsCallback) {
  const newArray: string[] = [];

  array.forEach((value) => {
    newArray.push(callback(value));
  });

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => {
  return item.toUpperCase();
});

console.log(abc);
console.log(abcMapped);
