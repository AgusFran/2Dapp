import { BaseProvider } from "../base/base";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Character } from "../../classes/character";
import { SessionProvider } from "../session/session";

@Injectable()
export class CharactersProvider extends BaseProvider<Character> {
  constructor(public angularFirebase: AngularFireDatabase) {
    super(
      `users/${SessionProvider.getCurrentUserKey()}/characters`,
      angularFirebase
    );
  }
}
