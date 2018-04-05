import { Character } from "./character";

export class Match {
  private key: string;
  private name: string;
  private dm: string;
  private characters: Character[];

  constructor(name: string, dm: string) {
    this.name = name;
    this.dm = dm;
    this.characters = [];
  }

  addCharacter(character: Character) {
    this.characters.push(character);
  }
  getDM() {
    return this.dm;
  }
}
