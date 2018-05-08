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
export class FilterTableComponent {  
  vehicles: Vehicle[] = [];
  karoserie: string[];
  value: any;
  selectedRychlost: number;
  selectedVykon:number;
  selectedHavarovane:string;
  selectedNehavarovane:string;
  selectedAirbagy: number;
  selectedKaroseria: string;
  selectedDvere: number;
  //vykaslal som sa na ten export class co mame dole a idem rovno cez MatTableDataSource, teraz 
  // cielom bolo dostat pole Vehicle,co som spravil v ngOnInit
  dataSource = new MatTableDataSource(this.vehicles);
  // zobrazene stlpce
  displayedColumns = ['stav', 'vykon', 'pocet_rychlosti', 'pocet_airbagov', 'karoseria','pocet_dveri','pocet_kilometrov','rok_vyroby','model','cena','objem_motora','typ_paliva'];
   
  
  applyFilter(filterValue: string) {
    // tu sa vypisuje hodnota ktoru zadavas v textfield Filter
    console.log(filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
 constructor(private vehicleService: VehicleService) { 
  
}
  @ViewChild(MatSort) sort: MatSort;
 ngOnInit() {
  // tu subscribujem Observable<Vehicle[]> a to (vehicle) je to co mi treba cize Vehicle[] 
  this.vehicleService.getJSON().subscribe((vehicle) => {
    // kazdy prvok z (vehicle) pridam this.vehicles co mam v instancnej premennej
      vehicle.forEach(element => {
        this.vehicles.push(element);
      });
  });
  this.dataSource.sort = this.sort;
 }

}
// const VEHICLE_DATA: Vehicle[] = [{stav:'nehavarovane',vykonMotora: 271,pocetRychlosti:5,pocetAirbagov:8,karoseria:'sedan',pocetDveri:4,pocetKilometrov:125486,rokVyroby:2007,model:'',cena:71264,objemMotora:3210,typPaliva:'benzin'} ];

// export class VehicleDataSource extends DataSource<any> {
//   constructor(private vehicleService: VehicleService) {
//     super();
//   }
//   connect(): Observable<Vehicle[]> {
//     return this.vehicleService.getJSON();
//   }
//   disconnect() {}
// }