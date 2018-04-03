import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { MainPage } from "../main/main";
import { CharactersProvider } from "../../providers/characters/characters";
import { SessionProvider } from "../../providers/session/session";
import { CharacterCreationComponent } from "../../components/character-creation/character-creation";

@Component({
  selector: "page-character-selection",
  templateUrl: "character-selection.html"
})
export class CharacterSelectionPage {
  private characters;
  private root;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public charactersProvider: CharactersProvider,
    public navParams: NavParams
  ) {
    this.charactersProvider.getAll().subscribe(characters => (this.characters = characters));
    this.root = navParams.get("root");
  }

  selectCharacter(key: string) {
    SessionProvider.setCurrentCharacterKey(key);
    this.navCtrl.push(this.root ? this.root : MainPage);
  }

  addCharacter() {
    let modal = this.modalCtrl.create(CharacterCreationComponent);
    modal.present();
  }
}
