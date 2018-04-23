import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Vehicle} from './../models/Vehicle';


@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) {
    var obj;
    
    this.getJSON().subscribe(data => obj=data, error => console.log(error));
   }

   private serverUrl = 'http://localhost:8080/domainObjects';
   public getJSON(): Observable<Vehicle[]> {
        
      return this.http.get<Vehicle[]>(this.serverUrl);
    } 
                    

}
   

