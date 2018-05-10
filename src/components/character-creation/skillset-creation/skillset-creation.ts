import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";
import { SkillsetsProvider } from "../../../providers/skillsets/skillsets";
import { Skill } from "../../../classes/skill";
import { Skillset } from "../../../classes/skillset";

@Component({
  selector: "skillset-creation",
  templateUrl: "skillset-creation.html"
})
export class SkillsetCreationComponent {
  private skillsetForm: FormGroup;
  private formBuild: FormBuilder;

  private textPattern = "^[a-zA-Z0-9 ]*$";

  constructor(public navCtrl: NavController, public skillsetProvider: SkillsetsProvider) {
    this.formBuild = new FormBuilder();
    this.skillsetForm = this.formBuild.group({
      name: new FormControl("", [Validators.required, Validators.pattern(this.textPattern)]),
      type: new FormControl("", [Validators.required, Validators.pattern(this.textPattern)]),
      skills: this.formBuild.array([])
    });
    this.addSkill();
  }

  addSkill() {
    (<FormArray>this.skillsetForm.controls["skills"]).push(
      this.formBuild.group({
        name: new FormControl(),
        description: new FormControl(),
        type: new FormControl(),
        diceAmount: new FormControl(),
        diceValue: new FormControl()
      })
    );
  }

  create() {
    let skills: Skill[] = [];
    (<FormArray>this.skillsetForm.controls["skills"]).controls.forEach(skill => {
      let controls = (<FormGroup>skill).controls;
      skills.push(
        new Skill(
          controls["name"].value,
          controls["type"].value,
          controls["description"].value,
          controls["diceValue"].value,
          controls["diceAmount"].value
        )
      );
    });
    let skillset: Skillset = new Skillset(
      this.skillsetForm.controls["name"].value,
      this.skillsetForm.controls["type"].value,
      skills
    );
    this.skillsetProvider.addItem(skillset);
    this.navCtrl.pop();
  }

  cancel() {
    this.navCtrl.pop();
  }
}
