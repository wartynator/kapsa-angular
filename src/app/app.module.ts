import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material';
import {MatSliderModule} from '@angular/material/';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { VehicleService } from './services/vehicle.service';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableDataSource} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

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
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpModule

  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
