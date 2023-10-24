import { Character } from './character';

export class Advisor extends Character {
  advisor: string;
  personalQuote: string = 'No sé por qué, pero creo que voy a morir pronto';

  constructor(name: string, family: string, age: number, advise: string) {
    super(name, family, age);
    this.advisor = advise;
  }

  phrase() {
    return super.phrase(this.personalQuote);
  }
}
