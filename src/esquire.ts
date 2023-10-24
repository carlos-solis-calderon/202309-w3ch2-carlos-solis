import { Character } from './character';

export class Squire extends Character {
  patron: string;
  personalQuote: string = 'Soy un loser';
  servilityGrade: number;

  constructor(
    name: string,
    family: string,
    age: number,
    servilityGrade: number
  ) {
    super(name, family, age);
    this.patron = 'Fighter';
    this.servilityGrade = servilityGrade;
  }

  phrase() {
    return super.phrase(this.personalQuote);
  }
}
