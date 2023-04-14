import { Component, Input, OnInit } from '@angular/core';
import { Iweather } from 'src/app/interfaces/iweather';
import { WeatherService } from 'src/app/srvices/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  @Input() citiesWeather: Iweather[] = [];

  constructor(private weatherService: WeatherService) {}
    ngOnInit(): void {
      this.citiesWeather = this.weatherService.getWeather();
    }
  

}
