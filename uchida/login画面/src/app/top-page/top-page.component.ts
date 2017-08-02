import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Weight:number = 70;
  Height:number = 180;


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public LineChartType:string = 'line';
  public barChartLegend:boolean = false;
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 40, 11], label: '歩数'}
  ];

  Change_TopPage():void{
    this.router.navigate(['/toppage']);
  }
  Change_Admin():void{
    this.router.navigate(['/admin']);
  }
  Change_Setting():void{
    this.router.navigate(['/setting']);
  }
  Change_Logout():void{
    this.router.navigate(['/']);
  }
}
