export class Item {
  private key: string;
  private name: string;
  private description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
