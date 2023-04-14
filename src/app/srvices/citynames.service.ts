import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root',
})

export class CityNamesService {
  cityNames: string[] = [];

  constructor(private weatherservice: WeatherService) { }

  getcityNames(): string[] {
    this.weatherservice
    .getWeather()
    .forEach((city) => this.cityNames.push(city.name));

    return this.cityNames;
  }

}
 




