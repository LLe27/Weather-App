import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() // Allows us to inject this provider as a dependency
export class WeatherProvider {
  apiID = '&appid=74ad13aeaa570b0746f581293a069e05';
  currentURL;
  shortTermURL;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    this.shortTermURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getCurrentWeather(city, countryCode){
    return this.http.get(this.currentURL+city+','+countryCode+'&units=metric'+this.apiID)
      .map(res => res.json());
  }

  getShortTermWeather(city, countryCode){
    return this.http.get(this.shortTermURL+city+','+countryCode+'&units=metric&cnt=3'+this.apiID)
    .map(res => res.json());
  }
}
