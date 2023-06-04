import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from "ng-apexcharts";
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartService } from './services/chart.service';
import { TickerSelectComponent } from './components/ticker-select/ticker-select.component';
import { TickerService } from './services/ticker.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TickerSelectComponent,
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    HttpClientModule,
  ],
  providers: [
    ChartService,
    TickerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
