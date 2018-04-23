import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { FilterComponent } from './components/filter/filter.component';
import { VehicleService } from './services/vehicle.service';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterComponent
    
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,

   
   
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
