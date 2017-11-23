import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PreguntasLab3Page } from "../preguntas-lab3/preguntas-lab3";

/**
 * Generated class for the Laboratorio3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laboratorio3',
  templateUrl: 'laboratorio3.html',
})
export class Laboratorio3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Laboratorio3Page');
  }

  preguntasLab3(){
    this.navCtrl.push(PreguntasLab3Page);
  }

}
