import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { Match } from "../../classes/match";
import { MainPage } from "../main/main";
import { CharactersPage } from "../characters/characters";
import { CharactersProvider } from "../../providers/characters/characters";
import { SessionProvider } from "../../providers/session/session";
import { MatchesProvider } from "../../providers/matches/matches";
import { CharacterCreationComponent } from "../../components/character-creation/character-creation";

@Component({
  selector: "page-character-selection",
  templateUrl: "character-selection.html"
})
export class CharacterSelectionPage extends CharactersPage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public charactersProvider: CharactersProvider,
    public navParams: NavParams,
    public matchesProvider: MatchesProvider
  ) {
    super(navCtrl, modalCtrl, charactersProvider, navParams);
  }
  //Override
  selectCharacter(data: any) {
    this.matchesProvider.addCharacter(data.value);
    SessionProvider.setCurrentCharacterKey(data.key);
    this.navCtrl.pop();
  }
}
