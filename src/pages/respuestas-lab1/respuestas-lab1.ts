import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Global } from "../global";

/**
 * Generated class for the RespuestasLab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-respuestas-lab1',
  templateUrl: 'respuestas-lab1.html',
})
export class RespuestasLab1Page {

  public P1; P2; P3; P4; C;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespuestasLab1Page');
    console.log(Global.notasLab1)
    if (Global.notasLab1.nota1 == 1 || Global.notasLab1[0] == 1) {
      this.P1 = [1]
      this.C = [];
    }
    if (Global.notasLab1.nota2 == 1 || Global.notasLab1[1] == 1) {
      this.P2 = [1]
      this.C = [];
    }
    if (Global.notasLab1.nota3 == 1 || Global.notasLab1[2] == 1) {
      this.P3 = [1]
      this.C = [];
    }
    if (Global.notasLab1.nota4 == 1 || Global.notasLab1[3] == 1) {
      this.P4 = [1]
      this.C = [];
    }
    if (this.P1 != 1 && this.P2 != 1 && this.P3 != 1 && this.P4 != 1) {
      this.C = [1];
    }
  }
}

