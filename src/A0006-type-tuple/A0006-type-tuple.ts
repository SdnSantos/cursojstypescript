// Tuple é um array de tamanho fixo
const dataCustomer1: [number, string] = [1, 'Luiz'];
const dataCustomer2: readonly [number, string, string?] = [
  1,
  'Luiz',
  'Miranda',
];

dataCustomer1[0] = 100;
dataCustomer1[1] = 'Carlos';

console.log(dataCustomer1);
console.log(dataCustomer2);
