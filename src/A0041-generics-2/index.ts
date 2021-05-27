type MyType = number;

const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayNumbers);

async function promiseAsync() {
  return 1;
}

async function myPromise(): Promise<MyType> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, 1000),
  );
}

promiseAsync().then((res) => console.log(res + 1));
myPromise().then((res) => console.log(res + 1));
