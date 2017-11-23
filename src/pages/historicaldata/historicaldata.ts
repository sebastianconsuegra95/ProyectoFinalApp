import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { FirebaseListObservable } from "angularfire2/database-deprecated";

/**
 * Generated class for the HistoricaldataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historicaldata',
  templateUrl: 'historicaldata.html',
})
export class HistoricaldataPage {

  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;
  DataFirebase: FirebaseListObservable<any[]>;
  public Data;

  constructor(public angFire: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.DataFirebase = this.angFire.list('Historical/Data/0');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricaldataPage');

    this.DataFirebase.forEach(data => {
      this.Data=[];
      var I=[];
      console.log(data[0].current)
      
      // console.log(data.slice(0, 99));
      for (var i = 0; i < data.length; i++) {
        var temporal =data[i].current;
        this.Data[i]=Number(temporal.slice(0,-1));
        I[i]=String(i);
      }

      console.log(this.Data)

      this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
          labels: I,
          datasets: [
            {
              label: "My First dataset",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.Data,
              spanGaps: false,
            }
          ]
        }

      });

    });

  }

}
