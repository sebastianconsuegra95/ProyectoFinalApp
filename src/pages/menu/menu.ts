import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, MenuController } from 'ionic-angular';
import { Laboratorio1Page } from "../laboratorio1/laboratorio1";
import { Laboratorio2Page } from "../laboratorio2/laboratorio2";
import { Laboratorio3Page } from "../laboratorio3/laboratorio3";
import { Laboratorio4Page } from "../laboratorio4/laboratorio4";
import { RespuestasLab1Page } from "../respuestas-lab1/respuestas-lab1";
import { RespuestasLab2Page } from "../respuestas-lab2/respuestas-lab2";
import { RespuestasLab3Page } from "../respuestas-lab3/respuestas-lab3";
import { RespuestasLab4Page } from "../respuestas-lab4/respuestas-lab4";
import { SystemPage } from "../system/system";

import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { Global } from "../global";
import { HTTP } from '@ionic-native/http';


/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  public values1;
  public x: any;
  public x2: any;
  public notalab1;
  public notalab2;
  public notalab3;
  public notalab4;
  public bandera;
  public A;B;C;D;
  public DataFirebase: FirebaseListObservable<any[]>;

  constructor(public menuCtrl: MenuController, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private http: HTTP, public toastCtrl: ToastController, public angFire: AngularFireDatabase) {
    this.x2 = [];
    this.DataFirebase = angFire.list('/Data');
  }

  ionViewDidLoad() {
    this.menuCtrl.swipeEnable(true);
    console.log('ionViewDidLoad MenuPage');
    if (Global.lab1 != "--") {
      this.notalab1 = "(Calificación=" + Global.lab1 + "/10)";
      this.A = ["Respuestas"];
    }
    if (Global.lab2 != "--") {
      this.notalab2 = "(Calificación=" + Global.lab2 + "/10)";
      this.B = ["Respuestas"];
    }
    if (Global.lab3 != "--") {
      this.notalab3 = "(Calificación=" + Global.lab3 + "/10)";
      this.C = ["Respuestas"];
    }
    if (Global.lab4 != "--") {
      this.notalab4 = "(Calificación=" + Global.lab4 + "/10)";
      this.D = ["Respuestas"];
    }
    if (Global.bandera != 1) {
      let alert = this.alertCtrl.create({
        title: '¡Bienvenido ' + Global.user + '!',
        subTitle: 'Te presentamos la nueva aplicación educativa de energías renovables. Desarrolla los siguientes 4 laboratorios',
        buttons: ['OK']
      });
      Global.bandera = 1;
      setTimeout(function () {
        alert.present();
      }, 2000);
    }

  }

  lab1() {
    this.navCtrl.push(Laboratorio1Page)
    Global.bandera = 1;
  }
  lab2() {
    this.navCtrl.push(Laboratorio2Page)
    Global.bandera = 1;
  }
  lab3() {
    this.navCtrl.push(Laboratorio3Page)
    Global.bandera = 1;
  }
  lab4() {
    this.bandera = 1;
    this.http.get('http://www.goodwe-power.com/Mobile/GetMyPowerStationById?stationID=ae66726f-1120-4310-bb2d-583e1a9b2dcf', {}, {})
      //3ccfeb8e-90ca-4f9b-a774-6b15b34d763e
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
        this.values1 = data.data;
        this.x = this.values1.slice(1, -1);
        this.x = this.x.split(",");
        var temporal;
        for (var i = 0; i < this.x.length; i++) {
          temporal = this.x[i].split(":");
          this.x2[i] = temporal[1].slice(1, -1);
        }
        console.log(this.x2);
        this.DataFirebase.update("0", {
          totaltree: this.x2[12].slice(0, -1),
          totalmoney: this.x2[8],
          totalco2: this.x2[10].slice(0, -1) + "TON"
        });
      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
    this.navCtrl.push(Laboratorio4Page)
  }

  openSystemPage() {
    this.navCtrl.setRoot(SystemPage)
  }

  respuestasLab1(){
    this.navCtrl.push(RespuestasLab1Page);
  }

  respuestasLab2(){
    this.navCtrl.push(RespuestasLab2Page);
  }

  respuestasLab3(){
    this.navCtrl.push(RespuestasLab3Page);
  }

  respuestasLab4(){
    this.navCtrl.push(RespuestasLab4Page);
  }

}
