import { BaseProvider } from "../base/base";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "../../classes/user";

@Injectable()
export class UsersProvider extends BaseProvider<User> {
  constructor(public angularFirebase: AngularFireDatabase) {
    super("users", angularFirebase);
  }
}
