import { Injectable } from '@angular/core';
import { Iweather } from '../interfaces/iweather';
import { citiesWeather } from '../data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getWeather(): Iweather[] {
    return citiesWeather;
  }
}
