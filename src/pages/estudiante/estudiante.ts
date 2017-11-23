import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the EstudiantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estudiante',
  templateUrl: 'estudiante.html',
})
export class EstudiantePage {

  public estudiante;x;
  public Usuario;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstudiantePage');
    this.x=this.navParams.get('Usu')
    console.log(this.x);
    this.estudiante=this.x.$key
    this.x=[this.x];
  }

  closeModal(){
    this.navCtrl.pop();
  }

}
