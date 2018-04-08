import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { CharacterPage } from "../pages/character/character";
import { CharacterSelectionPage } from "../pages/character-selection/character-selection";
import { MatchSelectionPage } from "../pages/match-selection/match-selection";
import { MatchPage } from "../pages/match/match";
import { MainPage } from "../pages/main/main";
import { ItemsPage } from "../pages/items/items";
import { MatchDMPage } from "../pages/matchdmpage/matchdmpage";

import { HttpModule } from "@angular/http";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { BaseProvider } from "../providers/base/base";
import { UsersProvider } from "../providers/users/users";
import { SessionProvider } from "../providers/session/session";
import { ItemsProvider } from "../providers/items/items";
import { CharactersProvider } from "../providers/characters/characters";
import { MatchesProvider } from "../providers/matches/matches";
import { CharacterCreationComponent } from "../components/character-creation/character-creation";
import { CharacterCreatorPage } from "../components/character-creation/character-creator/character-creator";
import { SkillsetSelectionPage } from "../components/character-creation/skillset-selection/skillset-selection";
import { SkillsetCreationComponent } from "../components/character-creation/skillset-creation/skillset-creation";
import { BrowseComponent } from "../components/browse/browse";
import { ItemsGiverComponent } from "../components/items-giver/items-giver";
import { SkillsetsProvider } from "../providers/skillsets/skillsets";
import { RacesPage } from "../pages/races/races";
import { RacesProvider } from "../providers/races/races";
import { CharactersPage } from "../pages/characters/characters";

const firebaseConfig = {
  apiKey: "AIzaSyBlLiEXeRcMbW-azXNTkAh_TfC659HCQKU",
  authDomain: "dungeonsanddragons-99d7a.firebaseapp.com",
  databaseURL: "https://dungeonsanddragons-99d7a.firebaseio.com",
  projectId: "dungeonsanddragons-99d7a",
  storageBucket: "dungeonsanddragons-99d7a.appspot.com",
  messagingSenderId: "371973718487"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CharacterSelectionPage,
    CharactersPage,
    CharacterPage,
    MatchPage,
    MatchSelectionPage,
    ItemsPage,
    ItemsGiverComponent,
    MainPage,
    CharacterCreationComponent,
    CharacterCreatorPage,
    SkillsetSelectionPage,
    SkillsetCreationComponent,
    RacesPage,
    MatchDMPage,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CharacterSelectionPage,
    CharactersPage,
    CharacterPage,
    MatchPage,
    MatchSelectionPage,
    ItemsPage,
    ItemsGiverComponent,
    MainPage,
    CharacterCreationComponent,
    CharacterCreatorPage,
    SkillsetSelectionPage,
    RacesPage,
    MatchDMPage,
    SkillsetCreationComponent,
    BrowseComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BaseProvider,
    UsersProvider,
    SessionProvider,
    CharactersProvider,
    ItemsProvider,
    MatchesProvider,
    SkillsetsProvider,
    RacesProvider
  ]
})
export class AppModule {}
