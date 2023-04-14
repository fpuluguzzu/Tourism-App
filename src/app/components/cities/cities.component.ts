import { Component } from '@angular/core';
import { Icity } from 'src/app/interfaces/icity';
import { CitiesServiceService } from 'src/app/srvices/cities-service.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
cities!:Icity[];

constructor(private citiesService: CitiesServiceService) {}

ngOnInit(): void{
  this.cities = this.citiesService.getCities();
}

}
