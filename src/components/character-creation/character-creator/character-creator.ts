import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { SkillsetSelectionPage } from "../skillset-selection/skillset-selection";

@Component({
  selector: "page-character-creator",
  templateUrl: "character-creator.html"
})
export class CharacterCreatorPage {
  constructor(public navCtrl: NavController) {}

  navigate() {
    this.navCtrl.push(SkillsetSelectionPage);
  }
}
