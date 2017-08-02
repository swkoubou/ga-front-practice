import { Component, OnInit } from '@angular/core';

import { ModalService } from './modal/modal.service';
import { CompleteComponent, COMPLETE_TEXT_TOKEN } from './complete/complete.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  Employee:number = 0;
  Admin:number = 0;
  EmployeeList = [
    {name:'ウホる', email:'uhoru@yahoo.co.jp', authority:true},
    {name:'ウホった', email:'uhota@yahoo.co.jp', authority:false},
    {name:'ウホい', email:'uhoi@yahoo.co.jp', authority:true},
    {name:'ウホみ', email:'uhomi@yahoo.co.jp', authority:false},
    {name:'ウホそう', email:'uhoso@yahoo.co.jp', authority:true},
  ];
  VisibleList:any;

  constructor(private modal: ModalService) {}

  ngOnInit(){
    this.VisibleList = this.EmployeeList;

    for(var i = 0; i < this.EmployeeList.length; i++){
      if(this.EmployeeList[i].authority == true){
        this.Admin++;
      }
      this.Employee++;
    }
  }

  AllVisible():void {
    this.VisibleList = this.EmployeeList;
  }

  AdminSort():void {
    this.VisibleList = [];
    var counter:number = 0;
    for(var i = 0; i < this.EmployeeList.length; i++){
      if(this.EmployeeList[i].authority == true){
        this.VisibleList[counter++] = Object.assign({}, this.EmployeeList[i]);
      }
    }
  }

  EmpSetting(data: any): void {
    //受け渡すようにデータ整形
    console.log(data);
    const provider = { provide: COMPLETE_TEXT_TOKEN, useValue: {name: data.name, email: data.email}};
    //ModalServiceのやつ、表示したいコンポーネントも渡してる
    this.modal.open(CompleteComponent, provider);
  }
}
