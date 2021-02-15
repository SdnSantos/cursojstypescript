/* eslint-disable @typescript-eslint/prefer-as-const */
let x = 10; // infere o tipo number a variável x
x = 0b1010; // aceita trocar o valor para outro number
x = 'Luiz'; // mudar para outro tipo da erro

// quando usa const infere como se fosse um subtipo de number com o valor 10, esse tipo é chamado de tipo literal
const y = 10;

// z:100 é uma representação do const, está fixando ao z o tipo 100
let z: 100 = 100; // é igual a let z = 100 as const
z = 120; // da erro que 120 é diferente do tipo 100

// sempre que tiver os dois pontos no TS está inferindo tipo
// 'Red' | 'Yellow' | 'Blue' são tipo e não valores a cor
function choiceColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}

console.log(choiceColor('Red'));

// apenas para mudar para o module mode
export default 1;
