// Use any only in last case
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage('Teste'));
console.log(showMessage([1, 'a']));
console.log(showMessage(2));
