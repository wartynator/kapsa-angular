import { Injectable } from '@angular/core';
import { of, observable } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Vehicle} from './../models/Vehicle';
import {Preference} from './../models/Preference';
import { BehaviorSubject } from 'rxjs';
import { HttpRequest } from 'selenium-webdriver/http';
// import { METHODS } from 'http';
import { Http, Response } from '@angular/http';
import { domainRequest } from '../models/domainRequest';
import { HttpHeaders } from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/observable/of';


@Injectable()
export class VehicleService {

  
  constructor(private http: Http, private http2: HttpClient) {
    var obj;
  
   // this.getJSON().subscribe(data => obj=data, error => console.log(error));
   }
   

   public vehicles: Vehicle[] = [];
   public preferences: Preference[]=[];
   public fulltext: string="";
   public domainRequest: domainRequest;
   public serverUrl = 'http://localhost:8080/domainObjects';
   public mySubject;
   
   

  //  public getJSON2(): Vehicle[] {
  //   this.http.get(this.serverUrl).subscribe((res:Response) => {
  //     this.vehicles =  <Vehicle[]>res.json()
  //   });
  //   console.log(this.vehicles + " ++++++++++++++++++++++++");
  //   return this.vehicles;
  // } 

  // public getJSON(): Observable<Vehicle[]> {
        
  //   return this.http2.get<Vehicle[]>(this.serverUrl);
  //   // .subscribe(res =>
  //   //   this.mySubject = new BehaviorSubject(res)
  //   // );
  //   // console.log(this.mySubject);
  //   // return this.mySubject;
  // } 

    public getPreferences(preferences: Preference[]){
      this.preferences=preferences;
      // console.log(this.preferences);
    }
    
    public getFulltext(fulltext: string){
        this.fulltext=fulltext;

    }
    public postDomainRequest() : Observable<Vehicle[]>{
      let headers1 = new Headers();
      headers1.append('Content-Type', 'application/json');
      headers1.append('accept','application/json');
      let options = new RequestOptions({headers:headers1});
      this.domainRequest={};
      this.domainRequest.domainString="auta";
      this.domainRequest.fullTextInput=this.fulltext;
      this.domainRequest.preferences=this.preferences;
      
      console.log(this.domainRequest);
      let veh: Observable<Vehicle[]> = new Observable();
      // return new Observable(observable => {
      //   this.http.post(this.serverUrl, this.domainRequest, options).subscribe(res=>
      //     observable.next(res.json())
      //   );
      // }) 
      this.http.post(this.serverUrl, this.domainRequest, options).subscribe(res => veh = Observable.of(res.json()))    
      veh.subscribe(r => console.log(r));
      return veh;

    }
}
