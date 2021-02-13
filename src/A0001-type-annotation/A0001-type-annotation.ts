/* eslint-disable */
let name: string = 'Luiz'
let age: number = 30
let adult: boolean = true
let varSymbol: symbol = Symbol('qualquer-symbol')
// let big: bigint = 10n

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3]
let arrayOfNumbers2: number[] = [1, 2, 3]
let arrayOfStrings: Array<string> = ['a', 'b', 'c']
let arrayOfStrings2: string[] = ['a', 'b', 'c']

// Objects
// ?: interrogação significa que é opcional
let people: { name: string, age: number, adult?: boolean } = {
  name: 'Luiz',
  age: 30
}

// Functions
function sum(x: number, y: number): number {
  return x + y
}

const sum2: (x: number, y: number) => number = (x, y) => x + y
