import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList:HousingLocation[] = [
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


}
