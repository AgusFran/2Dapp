import { Component } from "@angular/core";
import { NavController, NavParams, ModalController, AlertController, ToastController } from "ionic-angular";
import { MainPage } from "../main/main";
import { CharactersProvider } from "../../providers/characters/characters";
import { SessionProvider } from "../../providers/session/session";
import { CharacterCreationComponent } from "../../components/character-creation/character-creation";
import { Toast } from "../../classes/toast";

@Component({
  selector: "page-characters",
  templateUrl: "characters.html"
})
export class CharactersPage {
  private characters;
  private root;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public provider: CharactersProvider,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
    this.provider.getAll().subscribe(characters => (this.characters = characters));
  }

  deleteCharacter(character: any) {
    let alert = this.alertCtrl.create({
      title: "Eliminar personaje",
      message: "Está seguro que desea eliminar el personaje seleccionado?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Eliminar",
          handler: data => {
            this.provider.removeItem(character.key);
            Toast.show(`Se eliminó la raza "${character.value.name}"`, this.toastCtrl);
          }
        }
      ]
    });
    alert.present();
  }

  addCharacter() {
    let modal = this.modalCtrl.create(CharacterCreationComponent);
    modal.present();
  }
}
