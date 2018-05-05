import { Component, OnInit } from '@angular/core';
import {Vehicle} from './../models/Vehicle';
import { VehicleService } from '../services/vehicle.service';
import {DataSource} from '@angular/cdk/collections';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {MatSliderModule} from '@angular/material/slider';
import * as _ from 'lodash';  

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {
  
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
  dataSource = new VehicleDataSource(this.vehicleService);
  displayedColumns = ['stav', 'vykon', 'pocet_rychlosti', 'pocet_airbagov', 'karoseria','pocet_dveri','pocet_kilometrov','rok_vyroby','model','cena','objem_motora','typ_paliva'];
  
 constructor(private vehicleService: VehicleService) { 
  
   this.vehicleService.getJSON().subscribe(res => {
     console.log(res);     
     this.karoserie =  _.uniqWith(res.map(a => a.karoseria), _.isEqual);    
     this.vehicles = res;
  });
  //this.vehicles = VEHICLE_DATA;
  //console.log(this.vehicles);
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
export class VehicleDataSource extends DataSource<any> {
  constructor(private vehicleService: VehicleService) {
    super();
  }
  connect(): Observable<Vehicle[]> {
    return this.vehicleService.getJSON();
  }
  disconnect() {}
}