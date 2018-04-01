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

  getAllCharacters(): any {
    let matchKey: string = SessionProvider.getCurrentMatchKey();
    return super.get(`${matchKey}/characters`);
  }
}
