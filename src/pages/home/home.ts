import { UsersProvider } from "./../../providers/users/users";
import { Component } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { User } from "../../classes/user";
import { SessionProvider } from "../../providers/session/session";
import { CharacterSelectionPage } from "../character-selection/character-selection";
import { MainPage } from "../main/main";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Toast } from "../../classes/toast";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private title: string = "Iniciar sesión";
  private loginForm: FormGroup;
  private registering: boolean;
  private users;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public usersProvider: UsersProvider) {
    this.usersProvider.getAll().subscribe(users => (this.users = users));

    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]*$")]),
      password: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]*$")]),
      confirmPassword: new FormControl("", [Validators.pattern("^[a-zA-Z0-9 ]*$")])
    });
  }

  login() {
    let user = this.getUser();
    if (user && user.value.password == this.getControlValue("password")) {
      SessionProvider.setCurrentUserKey(user.key);
      this.navCtrl.push(MainPage);
    } else {
      Toast.show("Los datos ingresados no son correctos", this.toastCtrl);
    }
  }

  register() {
    this.clear();
    this.title = "Registrarse";
    this.registering = true;
  }

  confirmRegistration() {
    if (!this.getUser()) {
      let user: User = new User(this.getControlValue("username"), this.getControlValue("password"));
      this.usersProvider.addItem(user);
      this.clear();
      Toast.show("Usuario creado correctamente", this.toastCtrl);
    } else {
      Toast.show("El usuario ya existe", this.toastCtrl);
    }
  }

  getUser() {
    for (let user of this.users) {
      if (user.value.username == this.getControlValue("username")) {
        return user;
      }
    }
    return null;
  }

  getControlValue(control: string) {
    return this.loginForm.controls[control].value;
  }

  clear() {
    this.title = "Iniciar sesión";
    this.loginForm.reset();
    this.registering = false;
  }
}
