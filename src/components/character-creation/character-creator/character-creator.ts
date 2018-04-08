import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { SkillsetSelectionPage } from "../skillset-selection/skillset-selection";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { CharactersProvider } from "../../../providers/characters/characters";
import { Character } from "../../../classes/character";

@Component({
  selector: "page-character-creator",
  templateUrl: "character-creator.html"
})
export class CharacterCreatorPage {
  private characterForm: FormGroup;
  private beenSubmited: boolean = false;

  private textPattern = "^[a-zA-Z0-9 ]*$";

  constructor(public navCtrl: NavController, public charactersProvider: CharactersProvider) {
    this.characterForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern(this.textPattern)]),
      gender: new FormControl("", [Validators.required, Validators.pattern(this.textPattern)]),
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

  submit() {
    this.beenSubmited = true;
    console.log(this.characterForm.get("name"));
    let data = {
      name: this.characterForm.get("name").value,
      gender: this.characterForm.get("gender").value,
      deity: this.characterForm.get("deity").value,
      alignment: this.characterForm.get("alignment").value
    };
    this.charactersProvider.addItem(new Character(data));
  }
}
