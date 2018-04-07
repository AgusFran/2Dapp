export class Skill {
  private name: string;
  private type: string;
  private description: string;
  private diceValue: number;
  private diceAmount: number;

  constructor(name: string, type: string, description: string, diceValue: number, diceAmount: number) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.diceValue = diceValue;
    this.diceAmount = diceAmount;
  }
}
