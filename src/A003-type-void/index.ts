// Function has type "void" when there is no return
function noHasReturn(...args: number[]): void {
  console.log(args);
}

noHasReturn(1, 2, 3);
