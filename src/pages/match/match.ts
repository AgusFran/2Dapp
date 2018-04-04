import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { MatchesProvider } from "../../providers/matches/matches";
import { SessionProvider } from "../../providers/session/session";
import { Match } from "../../classes/match";
import { Character } from "../../classes/character";
import { Toast } from "../../classes/toast";

import { MatchSelectionPage } from "../match-selection/match-selection";
import { CharacterSelectionPage } from "../character-selection/character-selection";

@Component({
  selector: "page-match",
  templateUrl: "match.html"
})
export class MatchPage {
  private match: Match;
  private characters: Character[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public matchesProvider: MatchesProvider
  ) {
    this.matchesProvider.getAllCharacters().subscribe(characters => (this.characters = characters));
  }
  selectCharacter() {
    this.navCtrl.push(CharacterSelectionPage);
  }

  viewCharacter(characterKey: string) {}
  hasCharacterSelected() {
    console.log(SessionProvider.getCurrentCharacterKey());
    return SessionProvider.getCurrentCharacterKey();
  }
}
