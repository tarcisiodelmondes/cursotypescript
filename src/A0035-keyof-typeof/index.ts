type ColorsObj = typeof colorsObj;
type ColorsKeys = keyof ColorsObj;

const colorsObj = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
  yellow: 'amarelo',
};

function translateCor(cor: ColorsKeys, colors: ColorsObj) {
  return colors[cor];
}

console.log(translateCor('red', colorsObj));
console.log(translateCor('green', colorsObj));
