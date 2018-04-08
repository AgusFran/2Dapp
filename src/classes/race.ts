export class Race {
  private key: string;
  private name: string;
  private description: string;
  private talent: string;

  constructor(name: string, description: string, talent: string) {
    this.name = name;
    this.description = description;
    this.talent = talent;
  }
}
