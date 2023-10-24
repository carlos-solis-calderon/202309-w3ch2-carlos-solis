import { Character } from './character';

export class Fighter extends Character {
  personalQuote = 'Primero pego y luego pregunto';
    skill = number,
    weapon: string;

  constructor(
    name: string,
    family: string,
    age: number,

  ) {
    super(name, family, age);
    this.skill = skill;
    this.weapon = weapon;
  }

  phrase() {
    return super.phrase(this.personalQuote);
  }
}
