import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PreguntasLab2Page } from "../preguntas-lab2/preguntas-lab2";

/**
 * Generated class for the Laboratorio2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laboratorio2',
  templateUrl: 'laboratorio2.html',
})
export class Laboratorio2Page {
  videos: any[] = [
    {
      title: '¿Qué es la energía solar fotovoltaica? | Sostenibilidad',
      video: 'https://www.youtube.com/embed/h20bJDZCaCk',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Laboratorio2Page');
  }

  preguntasLab2(){
    this.navCtrl.push(PreguntasLab2Page);
  }

}
