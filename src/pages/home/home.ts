import { UsersProvider } from "./../../providers/users/users";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { User } from "../../interfaces/user";
import { SessionProvider } from "../../providers/session/session";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private username: string;
  private password: string;
  private confirmPassword: string;
  private registering: boolean;
  private usernameExists: boolean;
  private users;

  constructor(
    public navCtrl: NavController,
    public usersProvider: UsersProvider
  ) {
    this.usersProvider.getAll().subscribe(users => (this.users = users));
  }

  login() {
    let user = this.getUser();
    if (user && user.value.password == this.password) {
      console.log("logged");
      SessionProvider.setCurrent(user.key);
      console.log(SessionProvider.getCurrent());
    } else {
      console.log("failed");
    }
  }

  register() {
    this.clear();
    this.registering = true;
  }

  confirmRegistration() {
    if (!this.getUser()) {
      let user: User = new User(this.username, this.password);
      this.usersProvider.addItem(user);
      this.clear();
    }
  }

  getUser() {
    for (let user of this.users) {
      if (user.value.username == this.username) {
        return user;
      }
    }
    return null;
  }

  clear() {
    this.username = "";
    this.password = "";
    this.confirmPassword = "";
    this.registering = false;
    this.usernameExists = false;
  }
}
