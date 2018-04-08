import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { CharacterSelectionPage } from "../character-selection/character-selection";
import { MatchSelectionPage } from "../match-selection/match-selection";
import { ItemsPage } from "../items/items";
import { RacesPage } from "../races/races";
import { CharactersPage } from "../characters/characters";

@Component({
  selector: "page-main",
  templateUrl: "main.html"
})
export class MainPage {
  pagesNames: any[] = [
    // tipo Page?
    {
      url: MatchSelectionPage,
      name: "Selección de Partida"
    },
    {
      url: ItemsPage,
      name: "Items"
    },
    {
      url: CharactersPage,
      name: "Personajes"
    },
    {
      url: RacesPage,
      name: "Razas"
    }
  ];

  constructor(public navCtrl: NavController) {}

  getPages() {
    return this.pagesNames;
  }

  redirect(url: string) {
    this.navCtrl.push(url);
  }
}
