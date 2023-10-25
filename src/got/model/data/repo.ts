import { King } from '../king';
import { Fighter } from '../fighter.js';
import { Squire } from '../squire.js';
import { Advisor } from '../advisor.js';
import { Character, CharacterStructure } from '../character';

export function repoSerial(): CharacterStructure {
  const characters: Character[] = [
    new King('Joffrey', 'Baratheon', 16, 2),
    new Fighter('Jaime', 'Lannister', 30, 'Espadas', 8),
    new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10),
  ];

  characters.push(new Advisor('Tyrion', 'Lannister', 40, characters[2]));
  characters.push(
    new Squire('Bronn', 'AguasNegras', 54, 0, characters[1] as Fighter)
  );

  return JSON.parse(JSON.stringify(characters));
}

export function repo() {
  const characters: Character[] = [
    new King('Joffrey', 'Baratheon', 16, 2),
    new Fighter('Jaime', 'Lannister', 30, 'Dragones', 10),
    new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10),
  ];

  characters.push(new Advisor('Tyrion', 'Lannister', 40, characters[2]));
  characters.push(
    new Squire('Bronn', 'AguasNegras', 54, 0, characters[1] as Fighter)
  );

  return characters;
}
