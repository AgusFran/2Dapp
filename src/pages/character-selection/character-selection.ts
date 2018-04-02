import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { HomePage } from "../home/home";
import { CharactersProvider } from "../../providers/characters/characters";
import { SessionProvider } from "../../providers/session/session";
import { CharacterCreationComponent } from "../../components/character-creation/character-creation";

@Component({
  selector: "page-character-selection",
  templateUrl: "character-selection.html"
})
export class CharacterSelectionPage {
  private characters;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
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
    let modal = this.modalCtrl.create(CharacterCreationComponent);
    modal.present();
  }
}
