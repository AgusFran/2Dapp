import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SessionProvider {
  private static userKey: string;

  constructor() {}

  static getCurrent(): string {
    return SessionProvider.userKey;
  }

  static setCurrent(userKey: string) {
    SessionProvider.userKey = userKey;
  }
}
