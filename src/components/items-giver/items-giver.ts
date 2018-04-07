import { Component } from "@angular/core";
import { ModalController, NavParams, NavController, ViewController } from "ionic-angular";

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
  private items: any[] = [];
  private characters: any[] = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.characters = navParams.get("characters");
    this.items = navParams.get("items");

    console.log("maflag");

    console.log(this.characters);

    console.log(this.items);

    console.log("Hello ItemsGiverComponent Component");
  }

  addItemSelected() {}
  addCharacterSelected() {}

  commit() {
    //add the items to the characters and dismiss
    this.viewCtrl.dismiss();
  }

  // openCharacterSelectionAlert() {
  //   let alert = this.alertCtrl.create();
  //   alert.setTitle("Seleccionar personajes");

  //   this.match.characters.forEach(character => {
  //     alert.addInput({
  //       type: "checkbox",
  //       label: character.value.name,
  //       value: character.key
  //     });
  //   });
  //   alert.addButton("Cancel");
  //   alert.addButton({
  //     text: "Okay",
  //     handler: data => {
  //       this.selectedCharactersKeys = data;
  //       this.openItemSelectionAlert();
  //     }
  //   });
  //   alert.present();
  // }

  // openItemSelectionAlert() {
  //   let items: any[] = [];
  //   console.log("ma faalaag");
  //   let suscription = this.itemsProvider.getAll().subscribe(data => {
  //     console.log(data);
  //     items = data;
  //     let alert = this.alertCtrl.create();
  //     alert.setTitle("Dar items");

  //     items.forEach(item => {
  //       console.log("maflag", item);

  //       alert.addInput({
  //         type: "checkbox",
  //         label: item.value.name,
  //         value: item.key
  //       });
  //     });

  //     alert.addInput({
  //       type: "number",
  //       label: "asd"
  //     });

  //     alert.addButton("Cancel");
  //     alert.addButton({
  //       text: "Okay",
  //       handler: data => {
  //         console.log(data);
  //         this.addItems(data, this.selectedCharactersKeys);
  //       }
  //     });
  //     alert.present();
  //     suscription.unsubscribe();
  //   });
  // }
}
