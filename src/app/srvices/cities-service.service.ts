import { Injectable } from '@angular/core';
import {citiesInfo} from '../data';
import { Icity } from '../interfaces/icity';


@Injectable({
  providedIn: 'root'
})
export class CitiesServiceService {

  constructor() { }

  getCities(): Icity[] {
    return citiesInfo;
  }
}
