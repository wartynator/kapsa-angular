import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Vehicle} from './../models/Vehicle';
import {Preference} from './../models/Preference';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) {
    var obj;
    
   // this.getJSON().subscribe(data => obj=data, error => console.log(error));
   }
   public mySubject;
   private serverUrl = 'http://localhost:8080/domainObjects';
   public getJSON(): BehaviorSubject<Vehicle[]> {
        
      this.http.get<Vehicle[]>(this.serverUrl).subscribe(res =>
        this.mySubject = new BehaviorSubject(res)
      );
      return this.mySubject;
    } 


    public getJSONBehavior(){

    }

    public postPrefrences(Preference: Preference){
     return this.http.post(this.serverUrl,Preference);
    }
                    

}
   

