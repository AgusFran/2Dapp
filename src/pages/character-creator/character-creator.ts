import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ClassSelectionPage } from "../class-selection/class-selection";

@Component({
  selector: "page-character-creator",
  templateUrl: "character-creator.html"
})
export class CharacterCreatorPage {
  constructor(public navCtrl: NavController) {}

  navigate() {
    this.navCtrl.push(ClassSelectionPage);
  }
}
