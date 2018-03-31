import { Component } from "@angular/core";
import { CharacterCreatorPage } from "../../pages/character-creator/character-creator";
import { ViewController } from "ionic-angular";

@Component({
  selector: "character-creation",
  templateUrl: "character-creation.html"
})
export class CharacterCreationComponent {
  private rootPage: any = CharacterCreatorPage;

  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}
