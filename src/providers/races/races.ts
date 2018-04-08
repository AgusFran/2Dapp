import { BaseProvider } from "../base/base";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Race } from "../../classes/race";
import { SessionProvider } from "../session/session";

@Injectable()
export class RacesProvider extends BaseProvider<Race> {
  constructor(public angularFirebase: AngularFireDatabase) {
    super(`races`, angularFirebase);
  }
}
