import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";
import { SkillsetsProvider } from "../../../providers/skillsets/skillsets";

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

  create() {}

  cancel() {
    this.navCtrl.pop();
  }
}
