import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Global } from "../global";

/**
 * Generated class for the RespuestasLab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-respuestas-lab2',
  templateUrl: 'respuestas-lab2.html',
})
export class RespuestasLab2Page {

  public P1; P2; P3; P4; P5; C;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespuestasLab2Page');
    console.log(Global.notasLab2)
    if (Global.notasLab2.nota1 == 1 || Global.notasLab2[0] == 1) {
      this.P1 = [1]
      this.C = [];
    }
    if (Global.notasLab2.nota2 == 1 || Global.notasLab2[1] == 1) {
      this.P2 = [1]
      this.C = [];
    }
    if (Global.notasLab2.nota3 == 1 || Global.notasLab2[2] == 1) {
      this.P3 = [1]
      this.C = [];
    }
    if (Global.notasLab2.nota4 == 1 || Global.notasLab2[3] == 1) {
      this.P4 = [1]
      this.C = [];
    }
    if (Global.notasLab2.nota6 == 1 || Global.notasLab2[4] == 1) {
      this.P5 = [1]
      this.C = [];
    }
    if (this.P1 != 1 && this.P2 != 1 && this.P3 != 1 && this.P4 != 1 && this.P5!=1) {
      this.C = [1];
    }
  }
}
