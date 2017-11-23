import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'
import { Global } from "../global";
import { MenuPage } from "../menu/menu";
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

/**
 * Generated class for the PreguntasLab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preguntas-lab1',
  templateUrl: 'preguntas-lab1.html',
})
export class PreguntasLab1Page {
  public x;
  public p1; p2; p3; p4; p5
  DataFirebase: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private angFire: AngularFireDatabase, public alertCtrl: AlertController) {
    this.DataFirebase = angFire.list('/Usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntasLab1Page');
  }

  goMenu() {
    this.x = [this.p1, this.p2, this.p3, this.p4, this.p5];
    var n = 0;
    for (var i = 0; i < this.x.length; i++) {
      if (this.x[i] == "1") {
        n = n + 1;
      } else if (i != 4 && this.x[i]!=undefined) {
        this.x[i] = 0;
      }
    }
    var NOTA = (n / 4) * 10;
    try {
      this.DataFirebase.update(Global.user, {
        Lab1: {
          nota1: this.x[0],
          nota2: this.x[1],
          nota3: this.x[2],
          nota4: this.x[3],
          nota5: this.x[4],
          notaF: NOTA,
        }
      })
      Global.notasLab1=this.x;
      Global.lab1=NOTA;
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
