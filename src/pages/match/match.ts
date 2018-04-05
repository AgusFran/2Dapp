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
  private match: any;
  private characters: any[];
  private hasCharacter: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public matchesProvider: MatchesProvider
  ) {
    this.matchesProvider.getAllCharacters().subscribe(characters => (this.characters = characters));
    // console.log(this.matchesProvider.getCurrentMatch());
    // this.matchesProvider.getCurrentMatch().map(match => {
    //   this.characters = match.characters;
    //   this.match = match;
    //   console.log("ma flag");
    //   console.log(match);
    //   console.log(this.hasCharacter);
    //   this.hasCharacterSelected();
    // });
    this.matchesProvider.getCurrentMatch().subscribe(match => {
      // this.characters = match.characters.value;
      this.match = match;
      console.log("ma flag");
      console.log(match.dm.value);
      console.log(this.hasCharacter);
      this.hasCharacterSelected();
    });
  }
  selectCharacter() {
    this.navCtrl.push(CharacterSelectionPage);
  }

  viewCharacter(characterKey: string) {
    console.log(this.characters);
  }

  hasCharacterSelected() {
    let flag: boolean = false;
    if (SessionProvider.getCurrentCharacterKey() || this.match.dm.value == SessionProvider.getCurrentUserKey()) {
      flag = true;
    } else {
      this.characters.forEach(character => {
        console.log(character);
        if (character.userkey == SessionProvider.getCurrentUserKey()) {
          flag = true;
        }
      });
    }
    console.log(SessionProvider.getCurrentCharacterKey());
    this.hasCharacter = flag;
  }
}
