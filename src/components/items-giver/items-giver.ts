import { Component } from "@angular/core";
import { ModalController, NavParams, NavController, ViewController } from "ionic-angular";
import { Character } from "../../classes/character";
import { Item } from "../../classes/items";
import { ItemsProvider } from "../../providers/items/items";

/**
 * Generated class for the ItemsGiverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "items-giver",
  templateUrl: "items-giver.html"
})
export class ItemsGiverComponent {
  private items: Item[] = [];
  private characters: Character[] = [];

  private checkedCharacters: any[] = [];
  private checkedItems: any[] = [];
  private amount: number = 1;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public itemsProvider: ItemsProvider
  ) {
    this.characters = navParams.get("characters");
    this.items = navParams.get("items");
  }

  commit() {
    console.log(this.checkedCharacters);
    console.log(this.checkedItems);
    console.log(this.amount);
    let data: any[] = [];

    for (let i = 0; i < this.checkedCharacters.length; i++) {
      if (this.checkedCharacters[i]) {
        for (let j = 0; j < this.checkedItems.length; j++) {
          if (this.checkedItems[j]) {
            console.log(this.characters[i]);
            data.push({
              character: this.characters[i],
              item: this.items[j],
              amount: this.amount
            });
          }
        }
      }
    }

    this.itemsProvider.giveItems(data);

    this.viewCtrl.dismiss();
  }
}
