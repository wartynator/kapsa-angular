import { Component, OnInit } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {Vehicle} from './../models/Vehicle';
import { VehicleService } from '../services/vehicle.service';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import {MatSliderModule} from '@angular/material/slider';
import * as _ from 'lodash';
import { Preference } from './../models/Preference';
import { domainRequest } from '../models/domainRequest';
;

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {
  vehicles: Vehicle[]=[];
  preferences: Preference[]=[];
  karoserie: string[];
  modely: string[];
  paliva: string[];
  value: any;
  valueFilter: any;
 
  selectedRychlost: number;
  selectedVykon:number;
  selectedHavarovane:string;

  selectedAirbagy: number;
  selectedKaroseria: string;
  selectedDvere: number;
  selectedKilometreOd: number;
  selectedKilometreDo: number;
  selectedRokOd: number;
  selectedRokDo: number;
  selectedModel: string;
  selectedCenaOd: number;
  selectedCenaDo: number;
  selectedObjemOd: number;
  selectedObjemDo: number;
  selectedPalivo: string;


  constructor(private vehicleService: VehicleService) {
/*
    this.vehicleService.getJSON().subscribe(res => {
      console.log(res);     
      this.karoserie =  _.uniqWith(res.map(a => a.karoseria), _.isEqual);    
      this.modely =  _.uniqWith(res.map(a => a.model), _.isEqual); 
      this.paliva =  _.uniqWith(res.map(a => a['typ paliva']), _.isEqual);   
      
      this.vehicles = res;
   });*/

   this.vehicleService.getJSON().subscribe((vehicle) => {
    // kazdy prvok z (vehicle) pridam this.vehicles co mam v instancnej premennej
      vehicle.forEach(element => {
       
      this.vehicles.push(element);        
      this.karoserie =  _.uniqWith(this.vehicles.map(a => a.karoseria), _.isEqual);    
      this.modely =  _.uniqWith(this.vehicles.map(a => a.model), _.isEqual); 
      this.paliva =  _.uniqWith(this.vehicles.map(a => a['typ paliva']), _.isEqual);   
      });
  });
   }

  ngOnInit() {
  }


  setStav(value){
    if(value == 1 ){
      this.selectedHavarovane = "havarovane";
    }
     else{
      this.selectedHavarovane = "nehavarovane";
     }
  
     
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

  setKilometreOd(value){
    this.selectedKilometreOd= value;
    console.log(this.selectedKilometreOd);
  }

  setKilometreDo(value){
    this.selectedKilometreDo= value;
    console.log(this.selectedKilometreDo);
  }

  setRokOd(value){
    this.selectedRokOd= value;
    console.log(this.selectedRokOd);
  }

  setRokDo(value){
    this.selectedRokDo= value;
    console.log(this.selectedRokDo);
  }

  setModel(value){
    this.selectedModel= value;
    console.log(this.selectedModel);
  }

  setCenaOd(value){
    this.selectedCenaOd= value;
    console.log(this.selectedCenaOd);
  }

  setCenaDo(value){
    this.selectedCenaDo= value;
    console.log(this.selectedCenaDo);
  }

  setObjemOd(value){
    this.selectedObjemOd= value;
    console.log(this.selectedObjemOd);
  }

  setObjemDo(value){
    this.selectedObjemDo= value;
    console.log(this.selectedObjemDo);
  }

  setPalivo(value){
    this.selectedPalivo= value;
    console.log(this.selectedPalivo);
  }

  setValueFilter(valueFilter){
    this.valueFilter=valueFilter;
  }


  sendPreferences(){ 
   this.preferences=[];   
  this.preferences.push(
  {type:"JsonStringPreference",attributeName:"stav",restrictions:this.selectedHavarovane},
  {type:"JsonDoublePreference",attributeName:"vykon motora",restrictions:[this.selectedVykon,this.selectedVykon]},
  {type:"JsonDoublePreference",attributeName:"pocet rychlosti",restrictions:[this.selectedDvere,this.selectedDvere]},
  {type:"JsonDoublePreference",attributeName:"pocet airbagov",restrictions:[this.selectedAirbagy,this.selectedAirbagy]},
  {type:"JsonStringPreference",attributeName:"karoseria",restrictions:this.selectedKaroseria},
  {type:"JsonDoublePreference",attributeName:"pocet dveri",restrictions:[this.selectedDvere,this.selectedDvere]},
  {type:"JsonDoublePreference",attributeName:"pocet kilometrov",restrictions:[this.selectedKilometreOd,this.selectedKilometreDo]},
  {type:"JsonDoublePreference",attributeName:"rok vyroby",restrictions:[this.selectedRokOd,this.selectedRokDo]},
  {type:"JsonStringPreference",attributeName:"model",restrictions:this.selectedModel},
  {type:"JsonDoublePreference",attributeName:"cena",restrictions:[this.selectedCenaOd,this.selectedCenaDo]},
  {type:"JsonDoublePreference",attributeName:"objem motora",restrictions:[this.selectedObjemOd,this.selectedModel]},
);
 

    this.vehicleService.getPreferences(this.preferences);

  }

  
  sendDomainRequest(){
    this.vehicleService.postDomainRequest();
  }



}
