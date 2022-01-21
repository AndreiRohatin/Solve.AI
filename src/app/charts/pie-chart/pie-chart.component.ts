import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public pieChartData : any[] = [
    {
      data            : [350,450,120],
      backgroundColor : ["#F8D56A","#85CCFF","#DA3731"],
      circumference   : 360,
      borderColor     : "rgba(0,0,0,0)" //remove border
    }
  ];
  public pieChartLabels : string[]  = ["Foo","Bar","Gon"];
  public pieChartType   : ChartType = "doughnut";

  ngOnInit(): void {
  }

}
