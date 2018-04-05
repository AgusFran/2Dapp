import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { MainPage } from "../main/main";
import { CharactersProvider } from "../../providers/characters/characters";
import { SessionProvider } from "../../providers/session/session";
import { CharacterCreationComponent } from "../../components/character-creation/character-creation";

@Component({
  selector: "page-characters",
  templateUrl: "characters.html"
})
export class CharactersPage {
  private characters;
  private root;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public charactersProvider: CharactersProvider
  ) {
    this.charactersProvider.getAll().subscribe(characters => (this.characters = characters));
  }

  selectCharacter(key: string) {
    this.navCtrl.push(MainPage);
  }

  addCharacter() {
    let modal = this.modalCtrl.create(CharacterCreationComponent);
    modal.present();
  }
}
