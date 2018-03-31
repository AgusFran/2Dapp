import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomePage } from "../home/home";
import { CharactersProvider } from "../../providers/characters/characters";
import { SessionProvider } from "../../providers/session/session";

@Component({
  selector: "page-character-selection",
  templateUrl: "character-selection.html"
})
export class CharacterSelectionPage {
  private characters;

  constructor(
    public navCtrl: NavController,
    public charactersProvider: CharactersProvider
  ) {
    this.charactersProvider
      .getAll()
      .subscribe(characters => (this.characters = characters));
  }
  selectCharacter(key: string) {
    SessionProvider.setCurrentCharacterKey(key);
    this.navCtrl.push(HomePage);
  }
  addCharacter() {
    this.navCtrl.push(HomePage);
  }
}
