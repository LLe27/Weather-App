import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WeatherProvider } from './../../providers/weather/weather';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-short-term',
  templateUrl: 'short-term.html',
})
export class ShortTermPage {
  shortTermWeather: any;
  location: {
    city: string,
    countryCode: string,
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    private weatherProvider: WeatherProvider
  ) {
  }

  ionViewDidLoad() {
    this.storage.get('location').then((val) => {
      if (val != null){
        this.location = JSON.parse(val);
      } else {
          this.location = {
            city: 'London',
            countryCode: 'CA'
          }
      }

      this.weatherProvider.getShortTermWeather(this.location.city, this.location.countryCode).subscribe(weather => {
        this.shortTermWeather = weather;
      });

      console.log(this.shortTermWeather);
    });
  }

}
