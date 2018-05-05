import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';

import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';

import { VehicleService } from './services/vehicle.service';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,


    
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    MatSliderModule

   
   
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
