import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'
import { Global } from "../global";
import { MenuPage } from "../menu/menu";
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

/**
 * Generated class for the PreguntasLab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preguntas-lab2',
  templateUrl: 'preguntas-lab2.html',
})
export class PreguntasLab2Page {
  public x;
  public p1; p2; p3; p4; p5a; p5b; p6
  DataFirebase: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private angFire: AngularFireDatabase, public alertCtrl: AlertController) {
    this.DataFirebase = angFire.list('/Usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntasLab2Page');
  }

  goMenu() {
    this.x = [this.p1, this.p2, this.p3, this.p4, this.p5a, this.p5b, this.p6]
    var n = 0;
    for (var i = 0; i < this.x.length; i++) {
      if (this.x[i] == "1") {
        n = n + 1;
      } else if (i != 4 && i != 5 && this.x[i] != undefined) {
        this.x[i] = 0;
      }
    }
    var NOTA = (n / 5) * 10;
    try {
      this.DataFirebase.update(Global.user, {
        Lab2: {
          nota1: this.x[0],
          nota2: this.x[1],
          nota3: this.x[2],
          nota4: this.x[3],
          nota5: { ventaja: this.x[4], desventaja: this.x[5] },
          nota6: this.x[6],
          notaF: NOTA,
        }
      })
      Global.notasLab2 = [this.x[0], this.x[1], this.x[2], this.x[3], this.x[6]];
      Global.lab2 = NOTA;
      this.navCtrl.setRoot(MenuPage);
    } catch (error) {
      let alert = this.alertCtrl.create({
        title: '¡Faltan preguntas por responder!',
        subTitle: 'No podemos calificar tu rendimiento sin haber respondido todas las preguntas',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
