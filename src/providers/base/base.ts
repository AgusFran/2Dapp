import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "../../interfaces/user";

@Injectable()
export class BaseProvider<T> {
  constructor(
    public service: string,
    public angularFirebase: AngularFireDatabase
  ) {}

  getAll() {
    let users = this.angularFirebase.list(`/${this.service}/`);

    return users.snapshotChanges().map(changes =>
      changes.map(change => ({
        key: change.key,
        value: change.payload.val()
      }))
    );
  }

  addItem(item: T) {
    this.angularFirebase.list(`/${this.service}/`).push(item);
  }

  removeItem(key: string) {
    this.angularFirebase.list(`/${this.service}/`).remove(key);
  }
}
