// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { Chart } from 'chart.js/auto';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements AfterViewInit {
//   title = 'stock';
//   chart: any;
//   canvas: any;
//   ctx: any;
//   @ViewChild('mychart') mychart: any;

//   dataToPlot = [
//     { t: 1491004800000, o: 31.11, h: 33.04, l: 30.58, c: 32.03 },
//     { t: 1491177600000, o: 31.23, h: 34.77, l: 30.35, c: 32.24 },
//     { t: 1491264000000, o: 31.08, h: 34.68, l: 29.54, c: 32.48 },
//     { t: 1491350400000, o: 31.68, h: 33.49, l: 28.72, c: 30.46 },
//     { t: 1491436800000, o: 29.4, h: 31.83, l: 27.02, c: 29.76 }
//   ];

//   ngAfterViewInit() {
//       this.canvas = this.mychart.nativeElement;
//       this.ctx = this.canvas.getContext('2d');

//       // new Chart(this.ctx, {
//       //     type: 'line',
//       //     data: {
//       //         datasets: [{
//       //             label: 'Current Vallue',
//       //             data: [0, 20, 40, 50],
//       //             backgroundColor: "rgb(115 185 243 / 65%)",
//       //             borderColor: "#007ee7",
//       //             fill: true,
//       //         },
//       //         {
//       //             label: 'Invested Amount',
//       //             data: [0, 20, 40, 60, 80],
//       //             backgroundColor: "#47a0e8",
//       //             borderColor: "#007ee7",
//       //             fill: true,
//       //         }],
//       //         labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
//       //     },
//       // });
//   }
// }

import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {
  }
}
