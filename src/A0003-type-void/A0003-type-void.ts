function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const people = {
  name: 'Luiz',
  lastname: 'Ot�vio 2',

  showName(): void {
    console.log(this.name + ' ' + this.lastname);
  },
};

noReturn('Luiz', 'Ot�vio');
people.showName();

export { people };
