import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class FirebaseProvider {
  constructor(public afd: AngularFireDatabase) {}

  getShoppingItems() {
    let users = this.afd.list("/users/");
    return users.snapshotChanges().map(changes =>
      changes.map(change => ({
        key: change.key,
        value: change.payload.val()
      }))
    );
  }

  addItem(name) {
    this.afd.list("/users/").push(name);
  }

  removeItem(id) {
    this.afd.list("/users/").remove(id);
  }
}
