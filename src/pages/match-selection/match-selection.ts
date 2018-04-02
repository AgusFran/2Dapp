import { Component } from "@angular/core";
import { NgModule } from "@angular/core";
import { NavController, ToastController, IonicPageModule, IonicPage } from "ionic-angular";
import { MatchPage } from "../match/match";
import { MatchesProvider } from "../../providers/matches/matches";
import { SessionProvider } from "../../providers/session/session";
import { Match } from "../../classes/match";
import { AlertController } from "ionic-angular";
import { Toast } from "../../classes/toast";

@IonicPage()
@Component({
  selector: "page-match-selection",
  templateUrl: "match-selection.html"
})
export class MatchSelectionPage {
  private matches;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public matchesProvider: MatchesProvider
  ) {
    this.matchesProvider.getAll().subscribe(matches => (this.matches = matches));
  }
  selectMatch(key: string) {
    SessionProvider.setCurrentMatchKey(key);
    console.log(key);
    this.navCtrl.push(MatchPage);
  }
  createMatch() {
    let alert = this.alertCtrl.create({
      title: "Crear Partida",
      inputs: [
        {
          name: "name",
          placeholder: "Nombre"
        }
      ],
      buttons: [
        {
          text: "Cancer",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Crear",
          handler: data => {
            if (data.name) {
              let match: Match = new Match(data.name, SessionProvider.getCurrent());
              this.matchesProvider.addItem(match);
              Toast.show("Partida creada exitosamente", this.toastCtrl);
            } else {
              Toast.show("Debe ingresar un nombre para la partida", this.toastCtrl);
            }
          }
        }
      ]
    });
    alert.present();
  }
}
