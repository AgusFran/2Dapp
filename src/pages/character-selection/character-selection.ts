import { Component } from "@angular/core";
import { NavController, NavParams, ModalController, AlertController, ToastController } from "ionic-angular";
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
  private data: any;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public charactersProvider: CharactersProvider,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public matchesProvider: MatchesProvider
  ) {
    super(navCtrl, modalCtrl, charactersProvider, alertCtrl, toastCtrl);
  }
  //Override
  selectCharacter(data: any) {
    this.data = {
      key: data.key,
      value: {
        name: data.value.name,
        userkey: SessionProvider.getCurrentUserKey()
      }
    };
    this.matchesProvider.addCharacter(this.data);
    console.log(data);
    SessionProvider.setCurrentCharacterKey(this.data.key);
    this.navCtrl.pop();
  }
}
