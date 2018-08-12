import { BaseProvider } from "../base/base";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../classes/items";
import { SessionProvider } from "../session/session";

@Injectable()
export class ItemsProvider extends BaseProvider<Item> {
  constructor(public angularFirebase: AngularFireDatabase) {
    super("items", angularFirebase);
  }

  /**
   * Recives a data array that haves 3 attributes:
      character: Character
      item: Item
      amount: number
   */
  public giveItems(data: any[]) {
    data.forEach(element => {
      this.angularFirebase
        .list(`/users/${element.character.value.userkey}/characters/${element.character.key}/inventory/`)
        .push(element.item.value.name)
        .push(element.amount);
    });
  }
}
