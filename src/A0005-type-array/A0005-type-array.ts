export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

const result = multiplyArgs(1, 2, 3);
console.log(result);

export function concatStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const concat = concatStrings('a', 'b', 'c');
console.log(concat);

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const upper = toUpperCase('a', 'b', 'c');
console.log(upper);
