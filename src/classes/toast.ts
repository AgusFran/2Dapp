import { ToastController } from "ionic-angular";

export class Toast {
  static show(message: string, toastCtrl: ToastController) {
    let toast = toastCtrl.create({
      message: message,
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }
}
