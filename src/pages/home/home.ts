import { FirebaseProvider } from "./../../providers/firebase/firebase";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AngularFireList } from "angularfire2/database";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  shoppingItems;
  newItem = "";

  constructor(
    public navCtrl: NavController,
    public firebaseProvider: FirebaseProvider
  ) {
    this.shoppingItems = this.firebaseProvider.getShoppingItems();
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }

  removeItem(id) {
    console.log(id);
    this.firebaseProvider.removeItem(id);
  }
}
