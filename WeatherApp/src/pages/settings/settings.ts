import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: string;
  countryCode: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage
  ) {
    this.storage.get('location').then((val) => {
      if (val != null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.countryCode = location.countryCode;
      } else {
        this.city = "London";
        this.countryCode = "CA";
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveLocation(){
    let location = {
      city: this.city,
      countryCode: this.countryCode
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }
}
