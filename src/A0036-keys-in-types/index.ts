type Car = {
  brand: string;
  year: number;
};

type Veiculo = {
  marca: Car['brand'];
  ano: Car['year'];
  nome: string;
};

const car: Veiculo = {
  marca: 'Marca',
  ano: 2021,
  nome: 'Nome',
};

console.log(car);
