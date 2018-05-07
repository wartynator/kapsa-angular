import { Component, OnInit, ViewChild } from '@angular/core';
import {Vehicle} from './../models/Vehicle';
import { VehicleService } from '../services/vehicle.service';
import {DataSource} from '@angular/cdk/collections';
import { of } from 'rxjs';
import { Observable} from 'rxjs';
import {MatSliderModule} from '@angular/material/slider';
import * as _ from 'lodash';  
import {MatTableDataSource, MatSort} from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import {MatTableModule} from '@angular/material';


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
  //dataSource = new VehicleDataSource(this.vehicleService);
  dataSource = new VehicleDataSource(this.vehicleService);

  
 
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns = ['stav', 'vykon', 'pocet_rychlosti', 'pocet_airbagov', 'karoseria','pocet_dveri','pocet_kilometrov','rok_vyroby','model','cena','objem_motora','typ_paliva'];
  
 constructor(private vehicleService: VehicleService) { 
  

  /* this.vehicleService.getJSON().subscribe(res => {
     console.log(res);     
     this.dataSource1 = new MatTableDataSource(res);
     this.karoserie =  _.uniqWith(res.map(a => a.karoseria), _.isEqual);    
     this.vehicles = res;
  });*/
  //this.vehicles = VEHICLE_DATA;
  //console.log(this.vehicles);
  }
 
  

 ngOnInit() {
   console.log(this.dataSource);
  this.dataSource.sort = this.sort;
 }

 applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}


}
const VEHICLE_DATA: Vehicle[] = [{stav:'nehavarovane',vykonMotora: 271,pocetRychlosti:5,pocetAirbagov:8,karoseria:'sedan',pocetDveri:4,pocetKilometrov:125486,rokVyroby:2007,model:'',cena:71264,objemMotora:3210,typPaliva:'benzin'} ];

export class VehicleDataSource extends MatTableDataSource<any> {
  constructor(private vehicleService: VehicleService) {
    super();
  }
  connect(): BehaviorSubject<Vehicle[]> {
    return this.vehicleService.getJSON();
  }
  disconnect() {}
}