/* eslint-disable @typescript-eslint/no-unused-vars */
const name = 'Luiz';
const age = 30;
const adult = true;
const varSymbol = Symbol('qualquer-symbol');
// let big: bigint = 10n

// Arrays
const arrayOfNumbers: Array<number> = [1, 2, 3];
const arrayOfNumbers2: number[] = [1, 2, 3];
const arrayOfStrings: Array<string> = ['a', 'b', 'c'];
const arrayOfStrings2: string[] = ['a', 'b', 'c'];

// Objects
// ?: interrogação significa que é opcional
const people: { name: string; age: number; adult?: boolean } = {
  name: 'Luiz',
  age: 30,
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;
