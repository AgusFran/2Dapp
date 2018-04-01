import { Injectable } from "@angular/core";

@Injectable()
export class SessionProvider {
  private static userKey: string;
  private static currentCharacterKey: string;
  private static currentMatchKey: string;

  constructor() {}

  static getCurrent(): string {
    return SessionProvider.userKey;
  }

  static setCurrent(userKey: string) {
    SessionProvider.userKey = userKey;
  }

  static setCurrentCharacterKey(currentCharacterKey) {
    this.currentCharacterKey = currentCharacterKey;
  }
  static getCurrentCharacterKey() {
    return this.currentCharacterKey;
  }

  static setCurrentMatchKey(currentMatchKey) {
    this.currentMatchKey = currentMatchKey;
  }
  static getCurrentMatchKey() {
    return this.currentMatchKey;
  }
}
