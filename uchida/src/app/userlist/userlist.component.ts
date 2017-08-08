import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params}  from '@angular/router';
import { RequestService} from './../request.service';


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
  EmployeeList:any;
  VisibleList:any;
  BackToken:string;

  constructor(private authService:RequestService,
              private router:Router,
              private modal: ModalService) {}

  ngOnInit(){
    this.BackToken = sessionStorage.getItem("token");
    this.authService.getuserlist(this.BackToken).subscribe(
      result => this.setProfile(result),
      error => console.log(error)
    );
  }

  setProfile(result:any){
    this.EmployeeList = result;
    for(var i = 0; i < result.length; i++){
      this.EmployeeList[i].first_name = result[i].first_name + " " + result[i].last_name;
      this.EmployeeList[i].email = result[i].email;
      if(i == 0){
        this.EmployeeList[i].last_name = true;
      }else{
        this.EmployeeList[i].last_name = false;
      }
    }

    this.VisibleList = this.EmployeeList;

    for(var i = 0; i < this.EmployeeList.length; i++){
      if(this.EmployeeList[i].last_name == true){
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
      if(this.EmployeeList[i].last_name == true){
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
