export class Character {
  private key: string;
  private name: string;
  private gender: string;
  private deity: string;
  private alignment: string;

  constructor(character: any) {
    this.name = character.name;
    this.gender = character.gender;
    this.deity = character.deity;
    this.alignment = character.alignment;
  }
}
