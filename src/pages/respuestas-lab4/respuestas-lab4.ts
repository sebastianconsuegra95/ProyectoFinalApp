import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Global } from "../global";


/**
 * Generated class for the RespuestasLab4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-respuestas-lab4',
  templateUrl: 'respuestas-lab4.html',
})
export class RespuestasLab4Page {
  public P1; P2; P3; P4; C;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad RespuestasLab4Page');
      console.log(Global.notasLab4)
      if (Global.notasLab4.nota1 == 1 || Global.notasLab4[0] == 1) {
        this.P1 = [1]
        this.C = [];
      }
      if (Global.notasLab4.nota2 == 1 || Global.notasLab4[1] == 1) {
        this.P2 = [1]
        this.C = [];
      }
      if (Global.notasLab4.nota3 == 1 || Global.notasLab4[2] == 1) {
        this.P3 = [1]
        this.C = [];
      }
      if (Global.notasLab4.nota4 == 1 || Global.notasLab4[3] == 1) {
        this.P4 = [1]
        this.C = [];
      }
      if (this.P1 != 1 && this.P2 != 1 && this.P3 != 1 && this.P4 != 1) {
        this.C = [1];
      }
    }

}
