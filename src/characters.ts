import { King } from './king';
import { Fighter } from './fighter';
import { Squire } from './esquire';
import { Advisor } from './advisor';

const Joffrey = new King('Joffrey', 'Baratheon', 16, 2);
const Daenerys = new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10)
const Bronn = new Squire('Bronn', 'AguasNegras', 54, 0);
const Tyrion = new Advisor('Tyrion', 'Lannister', 40, 'Daenerys')
const Jaime = new Fighter('Jaime', 'Lannister', 30, "Espada");

export const characters = [Joffrey, Daenerys, Bronn, Tyrion, Jaime];
