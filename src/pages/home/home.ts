import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  DataFirebase: FirebaseListObservable<any[]>;
  DataFirebase2: FirebaseObjectObservable<any[]>;
  public values1;
  public values2;
  public values3;
  public xx;
  public x2: any;
  public x: any;
  public user;

  constructor(public navCtrl: NavController, angFire: AngularFireDatabase, private http: HTTP, public toastCtrl: ToastController) {
    this.DataFirebase = angFire.list('/Data');
    this.DataFirebase2 = angFire.object('/Data2');
    this.xx = angFire;
    this.x2=[];
    // this.http.get('http://www.goodwe-power.com/Mobile/GetMyPowerStationById?stationID=ae66726f-1120-4310-bb2d-583e1a9b2dcf', {}, {})
    // .then(data => {

    //   console.log(data.status);
    //   console.log(data.data); // data received by server
    //   console.log(data.headers);
    //   this.values1 = data.data;
    //   this.values2 = data.data.split(":");
    //   this.values3 = typeof (data.data);

    // })
    // .catch(error => {

    //   console.log(error.status);
    //   console.log(error.error); // error message as string
    //   console.log(error.headers);

    // });
    // console.log(this.values1)

  }

  ionViewDidLoad() {
    // this.http.get('http://www.goodwe-power.com/Mobile/GetMyPowerStationById?stationID=ae66726f-1120-4310-bb2d-583e1a9b2dcf', {}, {})
    // .then(data => {

    //   console.log(data.status);
    //   console.log(data.data); // data received by server
    //   console.log(data.headers);
    //   this.values1 = data.data;
    //   // this.values2 = data.data.split(":");
    //   // this.values3 = typeof (data.data);

    // })
    // .catch(error => {

    //   console.log(error.status);
    //   console.log(error.error); // error message as string
    //   console.log(error.headers);

    // });
    // console.log(this.values1)
    // let toast = this.toastCtrl.create({
    //   message: this.values1,
    //   duration: 3000
    // });
    // toast.present();
  }


  play() {
    // var u="/Data5/"
    // var y=String(user);
    // var z=u.concat(y)
    //  this.xx.list(z).push("algo")


    this.http.get('http://www.goodwe-power.com/Mobile/GetMyPowerStationById?stationID=ae66726f-1120-4310-bb2d-583e1a9b2dcf', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
        this.values1 = data.data;
        this.values3 = typeof (data.data);


      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });

    let toast = this.toastCtrl.create({
      message: this.values1,
      duration: 3000
    });
    toast.present();
    this.x = '{"curpower":"0.000kW","capacity":"2.000kW","percent":"0","status":"Offline","createdate":"2017-10-10","eday":"0.0kWh","etotal":"44.1kWh","income":"$ (USD)0.00","totalincome":"$ (USD)6.17","co2reduce":"0.000","totalco2reduce":"0.020","treesaved":"0.000","totaltreesaved":"0.132"}';
    this.x = this.x.slice(1, -1);
    this.x = this.x.split(",");
    var temporal;
    for (var i = 0; i < this.x.length; i++) {
      temporal = this.x[i].split(":");
      this.x2[i] = temporal[1].slice(1,-1);
    }
    console.log(this.x2);
  }
}

