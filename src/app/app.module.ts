import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { UsernamePage } from "../pages/username/username";
import { Laboratorio1Page } from "../pages/laboratorio1/laboratorio1";
import { Laboratorio2Page } from "../pages/laboratorio2/laboratorio2";
import { Laboratorio3Page } from "../pages/laboratorio3/laboratorio3";
import { Laboratorio4Page } from "../pages/laboratorio4/laboratorio4";
import { PreguntasLab1Page } from "../pages/preguntas-lab1/preguntas-lab1";
import { PreguntasLab2Page } from "../pages/preguntas-lab2/preguntas-lab2";
import { PreguntasLab3Page } from "../pages/preguntas-lab3/preguntas-lab3";
import { PreguntasLab4Page } from "../pages/preguntas-lab4/preguntas-lab4";
import { RespuestasLab1Page } from "../pages/respuestas-lab1/respuestas-lab1";
import { RespuestasLab2Page } from "../pages/respuestas-lab2/respuestas-lab2";
import { RespuestasLab3Page } from "../pages/respuestas-lab3/respuestas-lab3";
import { RespuestasLab4Page } from "../pages/respuestas-lab4/respuestas-lab4";
import { SystemPage } from "../pages/system/system";
import { TerminosPage } from "../pages/terminos/terminos";
import { ProfesorPage } from "../pages/profesor/profesor";
import { EstudiantePage } from "../pages/estudiante/estudiante";
import { ContactoPage } from "../pages/contacto/contacto";
import { HistoricaldataPage } from "../pages/historicaldata/historicaldata";

import { YoutubePipe } from "../pipes/Youtube/Youtube";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated'
import { HttpModule } from '@angular/http';
import { HTTP } from "@ionic-native/http";

  // Initialize Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyBPrxDmXVRNHOUzp03UhCLoaNr1d3wEAWc",
    authDomain: "datos-paneles-solares.firebaseapp.com",
    databaseURL: "https://datos-paneles-solares.firebaseio.com",
    projectId: "datos-paneles-solares",
    storageBucket: "datos-paneles-solares.appspot.com",
    messagingSenderId: "1080471538325"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    UsernamePage,
    Laboratorio1Page,
    Laboratorio2Page,
    Laboratorio3Page,
    Laboratorio4Page,
    PreguntasLab1Page,
    PreguntasLab2Page,
    PreguntasLab3Page,
    PreguntasLab4Page,
    RespuestasLab1Page,
    RespuestasLab2Page,
    RespuestasLab3Page,
    RespuestasLab4Page,
    YoutubePipe,
    SystemPage,
    TerminosPage,
    ProfesorPage,
    EstudiantePage,
    ContactoPage,
    HistoricaldataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    UsernamePage,
    Laboratorio1Page,
    Laboratorio2Page,
    Laboratorio3Page,
    Laboratorio4Page,
    PreguntasLab1Page,
    PreguntasLab2Page,
    PreguntasLab3Page,
    PreguntasLab4Page,
    RespuestasLab1Page,
    RespuestasLab2Page,
    RespuestasLab3Page,
    RespuestasLab4Page,
    SystemPage,
    TerminosPage,
    ProfesorPage,
    EstudiantePage,
    ContactoPage,
    HistoricaldataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
