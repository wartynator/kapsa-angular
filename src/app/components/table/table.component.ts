import { Component, OnInit } from '@angular/core';
import {Vehicle} from './../../models/Vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
   vehicles: Vehicle[];
 
  constructor(private vehicleService: VehicleService) { 
    this.vehicleService.getJSON().subscribe(res => {
      console.log(res);
      this.vehicles = res;
   });
   }

  
  
  ngOnInit() {
  
    
 
   
  }

}

const VEHICLE_DATA: Vehicle[] = [{stav:'nehavarovane',vykonMotora: 271,pocetRychlosti:5,pocetAirbagov:8,karoseria:'sedan',pocetDveri:4,pocetKilometrov:125486,rokVyroby:2007,model:'',cena:71264,objemMotora:3210,typPaliva:'benzin'} ];
