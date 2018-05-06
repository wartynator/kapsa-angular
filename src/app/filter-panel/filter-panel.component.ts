import { Component, OnInit } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {Vehicle} from './../models/Vehicle';
import { VehicleService } from '../services/vehicle.service';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import {MatSliderModule} from '@angular/material/slider';
import * as _ from 'lodash';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {
  vehicles: Vehicle[];
  karoserie: string[];
  modely: string[];
  paliva: string[];
  value: any;
 selectedRychlost: number;
  selectedVykon:number;
  selectedHavarovane:string;
  selectedNehavarovane:string;
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

    this.vehicleService.getJSON().subscribe(res => {
      console.log(res);     
      this.karoserie =  _.uniqWith(res.map(a => a.karoseria), _.isEqual);    
      this.modely =  _.uniqWith(res.map(a => a.model), _.isEqual); 
      this.paliva =  _.uniqWith(res.map(a => a['typ paliva']), _.isEqual);   
      
      this.vehicles = res;
   });
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

  



}
