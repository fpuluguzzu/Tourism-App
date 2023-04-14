import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iweather } from 'src/app/interfaces/iweather';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {

  @Input()  citiesWeather!: Iweather;
  name = this.activatedRoute.snapshot.paramMap.get('name');
  springM = this.activatedRoute.snapshot.paramMap.get('springM');
  springN = this.activatedRoute.snapshot.paramMap.get('springN');
  summerM = this.activatedRoute.snapshot.paramMap.get('summerM');
  summerN = this.activatedRoute.snapshot.paramMap.get('summerN');
  winterM = this.activatedRoute.snapshot.paramMap.get('winterM');
  winterN = this.activatedRoute.snapshot.paramMap.get('winterN');
  autumnM = this.activatedRoute.snapshot.paramMap.get('autumnM');
  autumnN = this.activatedRoute.snapshot.paramMap.get('autumnN');
  visitFrom = this.activatedRoute.snapshot.paramMap.get('visitFrom');
  visitTo = this.activatedRoute.snapshot.paramMap.get('visitTo');


  currentCity: any = this.name



  constructor(private activatedRoute: ActivatedRoute) {}

ngOnInit(): void {
  console.log('WeatherDetailsComponent ngOnInit called');
  
  
}





}
