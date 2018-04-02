import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-main",
  templateUrl: "main.html"
})
export class MainPage {
  pagesNames: string[] = ["HomePage", "ItemsPage"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  getPages() {
    return this.pagesNames;
  }

  redirect(url: string) {
    this.navCtrl.push(url);
  }
}
