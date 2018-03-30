import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class FirebaseProvider {
  constructor(public afd: AngularFireDatabase) {}

  getShoppingItems() {
    let asd = this.afd.list("/users/");
    console.log(asd);
    return asd.valueChanges();
  }

  addItem(name) {
    this.afd.list("/users/").push(name);
  }

  removeItem(id) {
    this.afd.list("/users/").remove(id);
  }
}
