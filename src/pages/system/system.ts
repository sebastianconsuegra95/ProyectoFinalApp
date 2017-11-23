import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { MenuPage } from "../menu/menu";

/**
 * Generated class for the SystemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-system',
  templateUrl: 'system.html',
})
export class SystemPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  DataFirebase: FirebaseListObservable<any[]>;
  public X;
  public Y;

  constructor(public menuCtrl: MenuController,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public angFire: AngularFireDatabase ) {
    this.DataFirebase=angFire.list('/Data')
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('bandera3'))
    if (this.navParams.get('bandera3')!=1){
    this.menuCtrl.swipeEnable(true);    
    }else{
      this.menuCtrl.swipeEnable(false);          
    }
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
    this.DataFirebase.forEach(data=>{
      this.X=data[0];
      var P= Number(this.X.power.slice(0,-1));
      var C=2000-P;
      this.Y=Math.round(P/(C+P)*100*Math. pow(10,2))/Math. pow(10,2);
      // var P=this.X[4].slice(-1,1)
      // console.log(P);
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ["P[W]"],
          datasets: [{
            label: '# of Votes',
            data: [P, C ],
            borderColor: 'white',
            backgroundColor: [
              "red",
              'whitesmoke',
            ],
          }]
        }
  
      });
    })
  }
  openMenuPage(){
    this.navCtrl.setRoot(MenuPage);
  }

}
