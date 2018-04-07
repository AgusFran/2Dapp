import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";
import { SkillsetsProvider } from "../../../providers/skillsets/skillsets";
import { SkillsetCreationComponent } from "../skillset-creation/skillset-creation";

@Component({
  selector: "page-class-selection",
  templateUrl: "skillset-selection.html"
})
export class SkillsetSelectionPage {
  private skillsets;
  private root;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public skillsetsProvider: SkillsetsProvider
  ) {
    this.skillsetsProvider.getAll().subscribe(skillsets => (this.skillsets = skillsets));
  }

  selectSkillset(key: string) {
    // this.navCtrl.push(MainPage);
  }

  addSkillset() {
    let modal = this.modalCtrl.create(SkillsetCreationComponent);
    modal.present();
  }
}
