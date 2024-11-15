import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[]  = [
    {
    id: 0,
    name: "Citra Grand City",
    city: "Palembang",
    state: "ID",
    photo: "https://citragrandcity.co.id/wp-content/uploads/2021/05/Calathea.jpg",
    availableUnits: 12,
    wifi: true,
    laundry: true
    }    
  ]


  constructor() { }

  getAllHousingLocations() : HousingLocation[]{
    return this.housingLocationList;
    
  }
  getHousingLocationById(id: Number) : HousingLocation | undefined{
    return this.housingLocationList.find(housingLocation => housingLocation.id == id);
  }
}
