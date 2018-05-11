import { Component, OnInit } from '@angular/core';
import {Vehicle} from './../../models/Vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import {MatSliderModule} from '@angular/material/slider';
import * as _ from 'lodash';  

@Component({

  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
   vehicles: Vehicle[];
   karoserie: string[];
   value: any;
  selectedRychlost: number;
   selectedVykon:number;
   selectedHavarovane:string;
   selectedNehavarovane:string;
   selectedAirbagy: number;
   selectedKaroseria: string;
   selectedDvere: number;
  constructor(private vehicleService: VehicleService) { 
 
   }

  
  
  ngOnInit() {
  

    
 
   
  }

  setStav(value){
    this.selectedHavarovane = value;
    console.log(this.selectedHavarovane);
  }

  setVykon(value){
    this.selectedVykon = value;
    console.log(this.selectedVykon);
  }

  setRychlost(value){
    this.selectedRychlost = value;
    console.log(this.selectedRychlost);
  }
  

  setAirbagy(value){
    this.selectedAirbagy= value;
    console.log(this.selectedAirbagy);
  }

  setKaroseria(value){
    this.selectedKaroseria= value;
    console.log(this.selectedKaroseria);
  }

  setDvere(value){
    this.selectedDvere= value;
    console.log(this.selectedDvere);
  }

}



const VEHICLE_DATA: Vehicle[] = [{stav:'nehavarovane',vykonMotora: 271,pocetRychlosti:5,pocetAirbagov:8,karoseria:'sedan',pocetDveri:4,pocetKilometrov:125486,rokVyroby:2007,model:'',cena:71264,objemMotora:3210,typPaliva:'benzin'} ];
