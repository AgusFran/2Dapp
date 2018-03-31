import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";

import { HttpModule } from "@angular/http";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { BaseProvider } from "../providers/base/base";
import { UsersProvider } from "../providers/users/users";

const firebaseConfig = {
  apiKey: "AIzaSyBlLiEXeRcMbW-azXNTkAh_TfC659HCQKU",
  authDomain: "dungeonsanddragons-99d7a.firebaseapp.com",
  databaseURL: "https://dungeonsanddragons-99d7a.firebaseio.com",
  projectId: "dungeonsanddragons-99d7a",
  storageBucket: "dungeonsanddragons-99d7a.appspot.com",
  messagingSenderId: "371973718487"
};

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BaseProvider,
    UsersProvider
  ]
})
export class AppModule {}
