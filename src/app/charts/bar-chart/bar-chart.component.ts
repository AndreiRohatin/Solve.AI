import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

const SAMPLE_BARCHART_DATA : any[] = [
  {data:[43,76,21,98,11,76],label:"Foo"},
  {data:[965,234,11,0,45,85],label:"Bar"}
];

const SAMPLE_BARCHART_LABELS : string[] = ["w1","w2","w3","w4","w5","w6"];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData : any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels : string[] = SAMPLE_BARCHART_LABELS;
  public barChartType:  ChartType = "bar";
  public barChartLegend = true;
  public barChartOptions : any = {
    scaleShowVerticalLines : false,
    responsive : true
  };
  ngOnInit(): void {
  }

}
