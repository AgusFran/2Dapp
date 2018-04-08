import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, ToastController } from "ionic-angular";
import { RacesProvider } from "../../providers/races/races";
import { Toast } from "../../classes/toast";
import { Race } from "../../classes/race";

@Component({
  selector: "page-races",
  templateUrl: "races.html"
})
export class RacesPage {
  public alertCtrl: AlertController;

  constructor(
    public navCtrl: NavController,
    alertCtrl: AlertController,
    public provider: RacesProvider,
    public toastCtrl: ToastController
  ) {
    this.alertCtrl = alertCtrl;
  }

  addRace() {
    let alert = this.alertCtrl.create({
      title: "Crear raza",
      inputs: [
        { name: "name", placeholder: "Nombre" },
        { name: "description", placeholder: "Descripcion" },
        { name: "talent", placeholder: "Dote" }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: data => {}
        },
        {
          text: "Crear",
          handler: data => {
            if (data.name) {
              let race: Race = new Race(data.name, data.description, data.talent);
              this.provider.addItem(race);
              Toast.show("Raza creada", this.toastCtrl);
            } else {
              Toast.show("Debe ingresar un nombre para la raza", this.toastCtrl);
            }
          }
        }
      ]
    });
    alert.present();
  }

  deleteRace(race: any) {
    let alert = this.alertCtrl.create({
      title: "Eliminar raza",
      message: "Está seguro que desea eliminar la raza seleccionada?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Eliminar",
          handler: data => {
            this.provider.removeItem(race.key);
            Toast.show(`Se eliminó la raza "${race.value.name}"`, this.toastCtrl);
          }
        }
      ]
    });
    alert.present();
  }
}
