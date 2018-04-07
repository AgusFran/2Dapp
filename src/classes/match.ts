import { Character } from "./character";

interface MatchCharacter {
  name: string;
  userkey: string;
}
export class Match {
  public key: string;
  public name: string;
  public dm: string;
  public characters: any[];

  constructor(name: string, dm: string) {
    this.name = name;
    this.dm = dm;
    this.characters = [];
  }

  addCharacter(character: any) {
    this.characters.push(character);
  }

  static newMatch(match: any) {
    let newMatch: Match = new Match(match.name, match.dm);
    if (match.characters.value) {
      Object.entries(match.characters.value).forEach(([characterKey, characterValue]) =>
        newMatch.characters.push({ key: characterKey, value: characterValue })
      );
    }

    return newMatch;
  }
}
