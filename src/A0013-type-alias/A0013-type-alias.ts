// type alias é como se fosse um apelido
// iniciar com letra maiúscula (convenção)
type Age = number;

type Person = {
  name: string;
  age: Age;
  salary: number;
  colorFavorite?: string;
};

type colorRGB = 'Red' | 'Green' | 'Blue';
type colorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type ColorFavorite = colorRGB | colorCMYK;

const person: Person = {
  name: 'Luiz',
  age: 30,
  salary: 200_000,
};

export function setColorFavorite(person: Person, color: ColorFavorite): Person {
  return {
    ...person,
    colorFavorite: color,
  };
}

console.log(setColorFavorite(person, ''));
console.log(setColorFavorite(person, 'Cyan'));
