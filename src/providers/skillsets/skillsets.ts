import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseProvider } from "../base/base";
import { AngularFireDatabase } from "angularfire2/database";
import { SessionProvider } from "../session/session";
import { Skillset } from "../../classes/skillset";

@Injectable()
export class SkillsetsProvider extends BaseProvider<Skillset> {
  constructor(public angularFirebase: AngularFireDatabase) {
    super(`skillsets`, angularFirebase);
  }
}
