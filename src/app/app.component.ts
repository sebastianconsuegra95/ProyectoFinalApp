import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { UsernamePage } from "../pages/username/username";
import { SystemPage } from "../pages/system/system";
import { RespuestasLab1Page } from "../pages/respuestas-lab1/respuestas-lab1";
import { ProfesorPage } from "../pages/profesor/profesor";
import { ContactoPage } from "../pages/contacto/contacto";
import { HistoricaldataPage } from "../pages/historicaldata/historicaldata";

import { Global } from "../pages/global";
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from "angularfire2/database-deprecated";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HistoricaldataPage;

  pages: Array<{ title: string, component: any, icon: string }>;
  DataFirebase: FirebaseListObservable<any[]>

  constructor(public alertCtrl: AlertController, public menuCtrl: MenuController, public angFire: AngularFireDatabase, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.DataFirebase = angFire.list('/Usuarios');
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Contenido', component: MenuPage, icon: 'ios-book' },
      { title: 'Sistema de Monitoreo', component: SystemPage, icon: 'podium' },
      { title: 'Servicio al Cliente', component: "contacto", icon: 'settings' },
      { title: 'Cerrar Sesión', component: UsernamePage, icon: 'md-close' },
    ];

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component == UsernamePage) {
      Global.bandera = 0;
    } else {
      Global.bandera = 1;
    }
    if (page.component == "contacto") {
      let alert = this.alertCtrl.create({
        title: "Contacto de servicio",
        subTitle: "En el caso de una falla por favor comunicarse vía e-mail al correo: sebastian951810@gmail.com"
      }).present();
    } else {
      if (page.component == MenuPage || page.component == UsernamePage) {
        this.nav.setRoot(page.component);
      } else {
        console.log(this.nav.getActive().component.name);
        if (this.nav.getActive().component.name == "SystemPage" && page.component == SystemPage) {
          this.menuCtrl.close();
        } else {
          this.nav.push(page.component);
        }
      }
    }
  }
}

