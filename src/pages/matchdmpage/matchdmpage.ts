import { Component } from "@angular/core";
import { NavController, AlertController, ModalController } from "ionic-angular";
import { Match } from "../../classes/match";
import { MatchesProvider } from "../../providers/matches/matches";
import { ItemsProvider } from "../../providers/items/items";
import { ItemsGiverComponent } from "../../components/items-giver/items-giver";

@Component({
  selector: "page-matchdmpage",
  templateUrl: "matchdmpage.html"
})
export class MatchDMPage {
  private match: Match;

  private selectedCharactersKeys: any[];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public matchesProvider: MatchesProvider,
    public modalCtrl: ModalController,
    public itemsProvider: ItemsProvider
  ) {
    this.selectedCharactersKeys = [];
    this.match = new Match("", "");
    this.matchesProvider.getCurrentMatch().subscribe(match => {
      this.match = Match.newMatch(match);
    });
  }
  editCharacter() {
    //opens a modal with the character as header, a simplistic view of current stats to edit them.
  }
  openCharacterSelectionAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Seleccionar personajes");

    this.match.characters.forEach(character => {
      alert.addInput({
        type: "checkbox",
        label: character.value.name,
        value: character.key
      });
    });
    alert.addButton("Cancel");
    alert.addButton({
      text: "Okay",
      handler: data => {
        this.selectedCharactersKeys = data;
        this.openItemSelectionAlert();
      }
    });
    alert.present();
  }
  openItemSelectionAlert() {
    let items: any[] = [];
    console.log("ma faalaag");
    let suscription = this.itemsProvider.getAll().subscribe(data => {
      console.log(data);
      items = data;
      let alert = this.alertCtrl.create();
      alert.setTitle("Dar items");

      items.forEach(item => {
        console.log("maflag", item);

        alert.addInput({
          type: "checkbox",
          label: item.value.name,
          value: item.key
        });
      });

      alert.addInput({
        type: "number",
        label: "asd"
      });

      alert.addButton("Cancel");
      alert.addButton({
        text: "Okay",
        handler: data => {
          console.log(data);
          this.addItems(data, this.selectedCharactersKeys);
        }
      });
      alert.present();
      suscription.unsubscribe();
    });
  }

  addItems(itemsKeys: any, selectedCharactersKeys) {
    console.log(itemsKeys);
    console.log(selectedCharactersKeys);
  }

  //opens a modal with the character, and a view of the item page, where the onclick of the list item is a confirm.
  giveItems() {
    let items: any[] = [];
    let suscription = this.itemsProvider.getAll().subscribe(data => {
      console.log(data);
      items = data;
      this.modalCtrl.create(ItemsGiverComponent, { items: items, characters: this.match.characters }).present();
      suscription.unsubscribe();
    });

    // this.openCharacterSelectionAlert();

    this.selectedCharactersKeys = [];
  }
  giveStats() {
    //opens a modal with the character name, a checkbox for each, and an item selector.
  }
  addMonster() {
    //opens an alert with monster name and max hp
  }
  removeMonster(key: any) {
    //delets this monster
  }
  editMonster(key: any) {
    //opens an alert to add or remove health
  }
}
