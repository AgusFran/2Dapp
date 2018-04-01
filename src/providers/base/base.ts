import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class BaseProvider<T> {
  constructor(
    public service: string,
    public angularFirebase: AngularFireDatabase
  ) {}

  get(key: string) {
    let result = this.angularFirebase.list(`/${this.service}/${key}/`);

    return this.getResult(result);
  }

  getAll() {
    let result = this.angularFirebase.list(`/${this.service}/`);

    return this.getResult(result);
  }

  addItem(item: T) {
    this.angularFirebase.list(`/${this.service}/`).push(item);
  }

  removeItem(key: string) {
    this.angularFirebase.list(`/${this.service}/`).remove(key);
  }

  private getResult(result: any) {
    return result.snapshotChanges().map(changes =>
      changes.map(change => ({
        key: change.key,
        value: change.payload.val()
      }))
    );
  }
}
