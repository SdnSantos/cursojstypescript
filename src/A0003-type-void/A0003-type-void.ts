function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const people = {
  name: 'Luiz',
  lastname: 'Otávio 2',

  showName(): void {
    console.log(this.name + ' ' + this.lastname);
  },
};

noReturn('Luiz', 'Otávio');
people.showName();

export { people };
