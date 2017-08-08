import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params}  from '@angular/router';
import { RequestService} from './../request.service';
import {CookieService} from 'angular2-cookie/core';

declare var google: any;

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  User:string = "";
  Token:string ="";
  BackToken:string = '';
  WorkTime:any = [];

  public barChartType:string = 'bar';
  public lineChartType:string = 'line';

  public barChartLegend:boolean = true;

  public lineChartData:Array<any> = [{data:[], label:"心拍数"}];
  public lineChartLabels:Array<any> =[];

  public barChartData:Array<any> = [{data:[], label:"歩数"}];
  public barChartLabels:Array<any> =[];

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  constructor(private authService:RequestService,
              private router:Router,
              public cookie: CookieService,
              public element: ElementRef) { }

  public WeekHeartRate(data:string[]):void{
    this.lineChartData = [];
    for(var i = 0;i<7;i++){
      if(!data["activities-heart"][i]["value"].restingHeartRate){
        this.lineChartData.push(0);
      }else{
        this.lineChartData.push(parseInt(data["activities-heart"][i]["value"].restingHeartRate));
      }
      this.lineChartLabels.push(data["activities-heart"][i].dateTime.substr(6));
    }
  }

  public WeekSteps(data:string[]):void{
    this.barChartData = [];
    for(var i = 0;i<7;i++){
      this.barChartData.push(parseInt(data["activities-steps"][i].value));
      this.barChartLabels.push(data["activities-steps"][i].dateTime.substr(6));
    }
  }

  public monthGraph(data:any[]):void {
    var date = [];
    for(var i = 0; i < data.length-1; i++){
      data[i].id =  Date.parse(data[i].end) - Date.parse(data[i].begin);
      date[i] = new Date(data[i].begin);
      date[i].setHours(date[i].getHours() - 9);
      data[i].id = data[i].id /1000 / 3600;
      this.WorkTime[i] = "";

      this.WorkTime[i] = [new Date(date[i].getFullYear(),date[i].getMonth(),date[i].getDate()),  parseFloat(data[i].id.toFixed(2))];
    }

    google.charts.setOnLoadCallback(() => this.drawChart());
  }

  public zero(num) {
    num += "";
    if (num.length === 1) {
      num = "0" + num;
    }
    return num;
  }

  public getToday() {
    var date = new Date();
    let year = date.getFullYear();
    let month = this.zero(date.getMonth() + 1);
    let day = this.zero(date.getDate());
    return year +"-"+ month +"-"+ day;
  }


  ngOnInit() {
    this.Token = this.cookie.get("access_token");
    this.BackToken = sessionStorage.getItem("token");

    let today = this.getToday();

    this.authService.getMonth(this.BackToken,today).subscribe(
      hosu => this.monthGraph(hosu),
      error => console.log(error)
    );
  }

  drawChart() {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'date', id: 'Date' });
    dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
    dataTable.addRows(this.WorkTime);


    var options = {
      calendar: { cellSize: 14 },
    };

         var chart = new google.visualization.Calendar(this.element.nativeElement.querySelector('.calender'));
         chart.draw(dataTable,options);
     }
}
