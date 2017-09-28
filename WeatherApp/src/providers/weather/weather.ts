import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() // Allows us to inject this provider as a dependency
export class WeatherProvider {
  apiID = '&appid=74ad13aeaa570b0746f581293a069e05';
  url; 

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  }

  getCurrentWeather(city, countryCode){
    return this.http.get(this.url+city+','+countryCode+this.apiID)
      .map(res => res.json());
  }
}
