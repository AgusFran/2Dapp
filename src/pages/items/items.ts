import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, ToastController } from "ionic-angular";
import { ItemsProvider } from "../../providers/items/items";
import { Item } from "../../classes/items";
import { Toast } from "../../classes/toast";

@IonicPage()
@Component({
  selector: "page-items",
  templateUrl: "items.html"
})
export class ItemsPage {
  private items: Item[];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public itemsProvider: ItemsProvider
  ) {
    this.itemsProvider.getAll().subscribe(items => (this.items = items));
  }

  getItems() {
    return this.items;
  }

  addItem(name: string, description: string) {
    let alert = this.alertCtrl.create({
      title: "Crear Item",
      inputs: [
        {
          name: "name",
          placeholder: "Nombre"
        },
        {
          name: "description",
          placeholder: "Descripcion"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Crear",
          handler: data => {
            if (data.name) {
              let item: Item = new Item(data.name, data.description);
              this.itemsProvider.addItem(item);
              Toast.show("Item creado", this.toastCtrl);
            } else {
              Toast.show("Debe ingresar un nombre para el item", this.toastCtrl);
            }
          }
        }
      ]
    });
    alert.present();
  }
  removeItem(key: string) {}
}
