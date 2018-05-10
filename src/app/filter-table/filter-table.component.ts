import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { Vehicle } from './../models/Vehicle';
import { VehicleService } from '../services/vehicle.service';
import { DataSource } from '@angular/cdk/collections';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { MatSliderModule } from '@angular/material/slider';
import * as _ from 'lodash';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { MatTableModule } from '@angular/material';
import { Sort } from '@angular/material';
import { PageEvent } from '@angular/material';
import { domainRequest } from '../models/domainRequest';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent {
  vehicles: Vehicle[] = [];
  valueFilter: any;
  
  //vykaslal som sa na ten export class co mame dole a idem rovno cez MatTableDataSource, teraz 
  // cielom bolo dostat pole Vehicle,co som spravil v ngOnInit
  dataSource: MatTableDataSource<Vehicle>;

  // zobrazene stlpce
  displayedColumns = ['stav', 'vykon', 'pocet_rychlosti', 'pocet_airbagov', 'karoseria', 'pocet_dveri', 'pocet_kilometrov', 'rok_vyroby', 'model', 'cena', 'objem_motora', 'typ_paliva'];
  sortedData;

  applyFilter(filterValue: string) {
    // tu sa vypisuje hodnota ktoru zadavas v textfield Filter
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  fulltextFilter(valueFilter){      
    this.vehicleService.getFulltext(valueFilter);
    
  }

  sendDomainRequest(){
   
    this.vehicleService.postDomainRequest();
  }
 
  constructor(private vehicleService: VehicleService) {
    this.sortedData = this.vehicles.slice();
    this.dataSource = new MatTableDataSource(this.vehicles);
  }
  
  getVehicles() {
    return this.vehicleService.getJSON().toPromise();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getVehicles().then((vehicles) => {
      this.dataSource.data = vehicles;  
    }, (e) => {
      // You will need to handle the error here :)
    });
  }
  
  sortData(sort: Sort) {
    //const data = this.vehicles.slice(0, this.pageEvent.pageSize);
    const data = this.vehicles;
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'stav': return compare(a.stav, b.stav, isAsc);
        case 'vykon': return compare(+a.vykonMotora, +b.vykonMotora, isAsc);
        case 'pocet_rychlosti': return compare(+a.pocetRychlosti, +b.pocetRychlosti, isAsc);
        case 'pocet_airbagov': return compare(+a.pocetAirbagov, +b.pocetAirbagov, isAsc);
        case 'karoseria': return compare(+a.karoseria, +b.karoseria, isAsc);
        case 'pocet_dveri': return compare(+a.pocetDveri, +b.pocetDveri, isAsc);
        case 'pocet_kilometrov': return compare(+a.pocetKilometrov, +b.pocetKilometrov, isAsc);
        case 'rok_vyroby': return compare(+a.rokVyroby, +b.rokVyroby, isAsc);
        case 'model': return compare(+a.model, +b.model, isAsc);
        case 'cena': return compare(+a.cena, +b.cena, isAsc);
        case 'objem_motora': return compare(+a.objemMotora, +b.objemMotora, isAsc);
        case 'typ_paliva': return compare(+a.typPaliva, +b.typPaliva, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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