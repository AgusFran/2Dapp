import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { MatchesProvider } from "../../providers/matches/matches";
import { SessionProvider } from "../../providers/session/session";
import { Match } from "../../classes/match";
import { Character } from "../../classes/character";
import { Toast } from "../../classes/toast";

import { MatchSelectionPage } from "../match-selection/match-selection";
import { CharacterSelectionPage } from "../character-selection/character-selection";
import { MatchDMPage } from "../matchdmpage/matchdmpage";

@Component({
  selector: "page-match",
  templateUrl: "match.html"
})
export class MatchPage {
  private match: any;
  private hasCharacter: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public matchesProvider: MatchesProvider
  ) {
    this.match = new Match("", "");
  }

  ionViewDidLoad() {
    this.matchesProvider.getCurrentMatch().subscribe(match => {
      this.match = Match.newMatch(match);
      this.isMatchDM();
      this.hasCharacterSelected();
    });
  }
  selectCharacter() {
    this.navCtrl.push(CharacterSelectionPage);
  }

  viewCharacter(characterKey: string) {}

  isMatchDM(): boolean {
    return this.match.dm == SessionProvider.getCurrentUserKey();
  }
  navDMPage() {
    this.navCtrl.push(MatchDMPage);
  }
  hasCharacterSelected() {
    let flag: boolean = false;
    if (SessionProvider.getCurrentCharacterKey() || this.isMatchDM()) {
      flag = true;
    } else {
      this.match.characters.forEach(character => {
        if (character.value.userkey == SessionProvider.getCurrentUserKey()) {
          flag = true;
        }
      });
    }
    this.hasCharacter = flag;
  }
}
