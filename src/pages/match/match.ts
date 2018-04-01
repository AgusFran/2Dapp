import { Component } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { MatchesProvider } from "../../providers/matches/matches";
import { SessionProvider } from "../../providers/session/session";
import { Match } from "../../classes/match";
import { Character } from "../../classes/character";
import { Toast } from "../../classes/toast";

import { MatchSelectionPage } from "../match-selection/match-selection";

@Component({
  selector: "page-match",
  templateUrl: "match.html"
})
export class MatchPage {
  private match: Match;
  private characters: Character[];

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public matchesProvider: MatchesProvider
  ) {
    this.matchesProvider
      .getAllCharacters()
      .subscribe(characters => (this.characters = characters));
  }
  selectCharacter() {
    console.log("redirect to personajes page");

    this.navCtrl.push(MatchSelectionPage); //pasar por parámetro la key del character que está viendo
  }

  viewCharacter(characterKey: string) {}
  hasCharacterSelected() {
    return SessionProvider.getCurrentCharacterKey();
  }
}
