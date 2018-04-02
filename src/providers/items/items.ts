import { BaseProvider } from "../base/base";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../classes/items";

@Injectable()
export class ItemsProvider extends BaseProvider<Item> {
  constructor(public angularFirebase: AngularFireDatabase) {
    super("items", angularFirebase);
  }
}
