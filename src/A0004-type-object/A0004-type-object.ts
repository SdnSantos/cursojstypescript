const objectA = {
  keyA: 'Value A',
  keyB: 'Value B',
};

objectA.keyA = 'Outro valor';

// erro pq não existe no objeto
objectA.keyC = 'Valor C';

// Outro exemplo
const objectB: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  // consigo criar uma chave qualquer depois
  // criei o keyD
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

console.log(objectB.keyA);
console.log(objectB.keyB);

objectB.keyC = 'Value C';
objectB.keyD = 'Value D';

console.log(objectB.keyC);
console.log(objectB.keyD);
