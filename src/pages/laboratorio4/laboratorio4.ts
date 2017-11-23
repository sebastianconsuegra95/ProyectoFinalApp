import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { PreguntasLab4Page } from "../preguntas-lab4/preguntas-lab4";
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';


/**
 * Generated class for the Laboratorio4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laboratorio4',
  templateUrl: 'laboratorio4.html',
})
export class Laboratorio4Page {

  DataFirebase: FirebaseListObservable<any[]>;  

  constructor(public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams, angFire: AngularFireDatabase) {
    this.DataFirebase = angFire.list('/Data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Laboratorio4Page');
  }

  preguntasLab4(){
    this.navCtrl.push(PreguntasLab4Page);
  }

  openToogleMenu(){
    this.menuCtrl.open()
  }

}
