import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { SkillsetSelectionPage } from "../skillset-selection/skillset-selection";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "page-character-creator",
  templateUrl: "character-creator.html"
})
export class CharacterCreatorPage {
  private characterForm: FormGroup;

  private textPattern = "^[a-zA-Z0-9 ]*$";

  constructor(public navCtrl: NavController) {
    this.characterForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern(this.textPattern)]),
      genre: new FormControl("", [Validators.required, Validators.pattern(this.textPattern)]),
      deity: new FormControl("", [Validators.required, Validators.pattern(this.textPattern)]),
      alignment: new FormControl("", [Validators.required, Validators.pattern(this.textPattern)]),
      race: new FormControl({ value: "", disabled: true }, [Validators.required, Validators.pattern(this.textPattern)]),
      skillset: new FormControl({ value: "", disabled: true }, [
        Validators.required,
        Validators.pattern(this.textPattern)
      ])
    });
  }

  raceSelection() {
    this.navCtrl.push(SkillsetSelectionPage);
  }

  skillsetSelection() {
    this.navCtrl.push(SkillsetSelectionPage);
  }

  statsConfig() {
    this.navCtrl.push(SkillsetSelectionPage);
  }

  submit() {}
}
