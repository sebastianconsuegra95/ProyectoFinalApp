import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { EstudiantePage } from "../estudiante/estudiante";
import { UsernamePage } from "../username/username";
import { SystemPage } from "../system/system";
/**
 * Generated class for the ProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesor',
  templateUrl: 'profesor.html',
})
export class ProfesorPage {
  DataFirebase: FirebaseListObservable<any[]>;

  constructor(public alertCtrl: AlertController, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public angFire: AngularFireDatabase) {
    this.DataFirebase = this.angFire.list('/Usuarios')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfesorPage');
    console.log(this.DataFirebase)
  }
  actionSheet() {
    var bandera3 = 1;
    let actionSheet = this.actionSheetCtrl.create({
      title: "Menú",
      buttons: [
        {
          text: "Sistema de Monitoreo",
          handler: () => {
            this.navCtrl.push(SystemPage, { bandera3 })
            console.log("System")
          }
        },
        {
          text: "Servicio al cliente",
          handler: () => {
            let alert = this.alertCtrl.create({
              title: "Contacto de servicio",
              subTitle: "En el caso de una falla por favor comunicarse vía e-mail al correo: sebastian951810@gmail.com"
            }).present();
          }
        },
        {
          text: "Cerrar Sesión",
          handler: () => {
            this.navCtrl.setRoot(UsernamePage)
            console.log("home")
          }
        },

        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("cancel")
          }
        }
      ]
    }).present();
  }

  openModal(usu) {
    this.DataFirebase.forEach(data => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].$key == usu) {
          var position = i;
          break;
        }
      }
      var Usu = data[position];
      let modal = this.modalCtrl.create(EstudiantePage, { Usu }).present()
    })
    
  }

}
