// Type "never" Never returns anything

function createError(): never {
  throw new Error('Any error');
}

createError();
