import { BaseProvider } from "../base/base";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Match } from "../../classes/match";
import { SessionProvider } from "../session/session";

@Injectable()
export class MatchesProvider extends BaseProvider<Match> {
  constructor(public angularFirebase: AngularFireDatabase) {
    super(`matches`, angularFirebase);
  }

  getCurrentMatch() {
    return super.get(`${SessionProvider.getCurrentMatchKey()}`);
  }
  getAllCharacters(): any {
    return super.getSinDown(`${SessionProvider.getCurrentMatchKey()}/characters`);
  }
  addCharacter(data) {
    this.angularFirebase.list(`/${this.service}/${SessionProvider.getCurrentMatchKey()}/characters/`).push(data);
  }
}
