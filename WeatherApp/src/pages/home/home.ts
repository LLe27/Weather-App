import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherProvider } from './../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentWeather:any;
  location: {
    city: string,
    countryCode: string,
  }

  constructor(
    public navCtrl: NavController, 
    private weatherProvider: WeatherProvider,
    private storage: Storage
  ) {
    
  }

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if (val != null){
        this.location = JSON.parse(val);
      } else {
          this.location = {
            city: 'London',
            countryCode: 'CA'
          }
      }

      this.weatherProvider.getCurrentWeather(this.location.city, this.location.countryCode).subscribe(weather => {
        this.currentWeather = weather;
      });
    });
  }
}
