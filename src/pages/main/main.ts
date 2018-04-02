import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-main",
  templateUrl: "main.html"
})
export class MainPage {
  pagesNames: any[] = [
    // tipo Page?
    {
      url: "MatchSelectionPage",
      name: "Selección de Partida"
    },
    {
      url: "ItemsPage",
      name: "Items"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  getPages() {
    return this.pagesNames;
  }

  redirect(url: string) {
    this.navCtrl.push(url);
  }
}
