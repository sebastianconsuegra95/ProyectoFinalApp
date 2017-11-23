import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Global } from "../global";


/**
 * Generated class for the RespuestasLab3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-respuestas-lab3',
  templateUrl: 'respuestas-lab3.html',
})
export class RespuestasLab3Page {

  public P1; P2; P3; P4; P5; C;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad RespuestasLab3Page');
      console.log(Global.notasLab3)
      if (Global.notasLab3.nota1 == 1 || Global.notasLab3[0] == 1) {
        this.P1 = [1]
        this.C = [];
      }
      if (Global.notasLab3.nota2 == 1 || Global.notasLab3[1] == 1) {
        this.P2 = [1]
        this.C = [];
      }
      if (Global.notasLab3.nota3 == 1 || Global.notasLab3[2] == 1) {
        this.P3 = [1]
        this.C = [];
      }
      if (Global.notasLab3.nota4 == 1 || Global.notasLab3[3] == 1) {
        this.P4 = [1]
        this.C = [];
      }
      if (Global.notasLab3.nota5 == 1 || Global.notasLab3[4] == 1) {
        this.P5 = [1]
        this.C = [];
      }
      if (this.P1 != 1 && this.P2 != 1 && this.P3 != 1 && this.P4 != 1 && this.P5 !=1) {
        this.C = [1];
      }
    }
}
