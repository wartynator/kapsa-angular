import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { VehicleService } from './services/vehicle.service';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterTableComponent,
    FilterPanelComponent,  
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    MatSliderModule,
    MatRadioModule
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
