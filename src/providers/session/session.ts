import { Injectable } from "@angular/core";

@Injectable()
export class SessionProvider {
  private static userKey: string;
  private static characterKey: string;
  private static currentMatchKey: string;

  constructor() {}

  static getCurrentUserKey(): string {
    return SessionProvider.userKey;
  }

  static setCurrentUserKey(userKey: string) {
    SessionProvider.userKey = userKey;
  }

  static setCurrentCharacterKey(characterKey) {
    this.characterKey = characterKey;
  }
  static getCurrentCharacterKey() {
    return this.characterKey;
  }

  static setCurrentMatchKey(currentMatchKey) {
    this.currentMatchKey = currentMatchKey;
  }
  static getCurrentMatchKey() {
    return this.currentMatchKey;
  }
}
