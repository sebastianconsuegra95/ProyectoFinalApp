import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PreguntasLab1Page } from "../preguntas-lab1/preguntas-lab1";

/**
 * Generated class for the Laboratorio1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laboratorio1',
  templateUrl: 'laboratorio1.html',
})
export class Laboratorio1Page {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Laboratorio1Page');
  }

  preguntasLab1(){
    this.navCtrl.push(PreguntasLab1Page);
  }

}
