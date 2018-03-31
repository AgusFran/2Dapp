export class User {
  private key: string;
  private username: string;
  private password: string;
  private characters: any[];

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
