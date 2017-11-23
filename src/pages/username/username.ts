import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, MenuController, LoadingController, ModalController } from 'ionic-angular';
import { MenuPage } from "../menu/menu";
import { Global } from "../global";
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { TerminosPage } from "../terminos/terminos";
import { ProfesorPage } from "../profesor/profesor";

/**
 * Generated class for the UsernamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-username',
  templateUrl: 'username.html',
})
export class UsernamePage {

  arrData = [];
  public user; code; user2;
  public DB;
  public x; T;
  public Est; Pro;
  public B; C;
  public C1; B1;
  public C2; B2;
  // splash = true;
  DataFirebase: FirebaseListObservable<any[]>;

  constructor(public modalCtrl: ModalController, public loadingCtrl: LoadingController, public menuCtrl: MenuController, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private angFire: AngularFireDatabase) {
    this.DataFirebase = angFire.list('/Usuarios');
    this.T = false;
    this.Est = 1;
    this.B = [1];
    this.C = [];
    this.C1 = "color1";
    this.B1 = "2px";
    this.C2 = "color2";
    this.B2 = 1;
  }

  ionViewDidLoad() {

    this.menuCtrl.swipeEnable(false);
    // setTimeout(() => this.splash = false, 4000);
    // console.log()
  }

  gotoTerms() {
    let modal1 = this.modalCtrl.create(TerminosPage);
    modal1.present();
  }

  estudiante() {
    this.Est = 1;
    this.B = [1];
    this.C = [];
    this.C1 = "color1";
    this.B1 = 2;
    this.C2 = "color2";
    this.B2 = 1;
  }

  profesor() {
    this.Est = 0;
    this.B = [];
    this.C = [1];
    this.C1 = "color2";
    this.B1 = 1;
    this.C2 = "color1";
    this.B2 = 2;
  }

  goPage(user, code, user2) {
    console.log(this.user)
    console.log(typeof (this.user));
    if (this.T == true) {
      if (this.Est == 1) {
        this.DataFirebase.forEach(data => {
          console.log(data);
          if (Number(data[0].$value) != 0) {
            if (this.user == undefined || this.user == "") {
              let toast = this.toastCtrl.create({
                message: "¡No has digitado tu Nombre y Apellido!",
                duration: 3000,
                position: 'top'
              });
              toast.present();
            } else {
              var bandera2 = 0;
              var usuario = this.user;
              for (var i = 0; i < data.length; i++) {
                if (data[i].$key == usuario) {
                  bandera2 = 1;
                  var position = i;
                  break;
                }
              }
              if (bandera2 == 0) {
                this.user = String(this.user);
                this.DataFirebase.update(this.user, {
                  Lab1: {
                    nota1: "--",
                    nota2: "--",
                    nota3: "--",
                    nota4: "--",
                    nota5: "--",
                    notaF: "--"
                  },
                  Lab2: {
                    nota1: "--",
                    nota2: "--",
                    nota3: "--",
                    nota4: "--",
                    nota5: "--",
                    nota6: "--",
                    notaF: "--"
                  },
                  Lab3: {
                    nota1: "--",
                    nota2: "--",
                    nota3: "--",
                    nota4: "--",
                    nota5: "--",
                    notaF: "--"
                  },
                  Lab4: {
                    nota1: "--",
                    nota2: "--",
                    nota3: "--",
                    nota4: "--",
                    nota5: "--",
                    notaF: "--"
                  },
                })
                Global.user = this.user;
                Global.lab1 = "--";
                Global.lab2 = "--";
                Global.lab3 = "--";
                Global.lab4 = "--";
              } else {
                Global.user = this.user;
                Global.lab1 = data[position].Lab1.notaF;
                Global.notasLab1 = data[position].Lab1;
                Global.lab2 = data[position].Lab2.notaF;
                Global.notasLab2 = data[position].Lab2;
                Global.lab3 = data[position].Lab3.notaF;
                Global.notasLab3 = data[position].Lab3;
                Global.lab4 = data[position].Lab4.notaF;
                Global.notasLab4 = data[position].Lab4;
              }
              if (this.x != 1) {
                this.navCtrl.setRoot(MenuPage)
              }
              this.x = 0;
            }
          } else {
            let alert = this.alertCtrl.create({
              title: "App Suspendida por Mantenimiento",
              subTitle: "Nos encontramos ahora en Mantenimiento, mil disculpas",
              buttons: ['Ok']
            })
            alert.present();
            this.x == 1;
          }
        })
      } else {
        if ((this.user2 == "admin" && this.code == "admin") || (this.user2 == "fajardofisica" && this.code == "543210")) {
          this.navCtrl.setRoot(ProfesorPage)
        } else if ((this.user2 == undefined || this.user2 == "") && (this.code == undefined || this.code == "")) {
          let toast = this.toastCtrl.create({
            message: "¡No has digitado tu Usuario y Código!",
            duration: 3000,
            position: 'top'
          });
          toast.present();
        } else {
          let alert = this.alertCtrl.create({
            title: "Usuario y/o código incorrecto",
            buttons: ["OK"]
          }).present()
        }
      }
    } else {
      let alert = this.alertCtrl.create({
        title: "No se han aceptado los términos y condiciones",
        subTitle: "Para acceder debes aceptar los términos y condiciones",
        buttons: ["OK"]
      }).present()
    }
  }
}


