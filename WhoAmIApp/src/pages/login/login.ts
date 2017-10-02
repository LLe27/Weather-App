import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from './../home/home';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  User:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController
  ) { }

  signInWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        this.User = res;
        console.log(this.User);
        this.navCtrl.setRoot(HomePage);
      })
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Login',
          subTitle: 'Login unsuccessful!',
          buttons: ['OK']
        });
        alert.present(); 
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
