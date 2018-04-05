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
  }

  addCharacter(character: any) {
    this.characters.push(character);
  }

  static newMatch(match: any) {
    let characters = [];
    let newMatch: Match = new Match(match.dm, match.name);
    Object.entries(match.characters.value).forEach(([key, value]) => characters.push({ key: key, value: value }));
    newMatch.characters = characters;

    return newMatch;
  }
}
