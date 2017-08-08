import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params}  from '@angular/router';
import { RequestService} from './../request.service';

@Component({
  selector: 'app-usersetting',
  templateUrl: './usersetting.component.html',
  styleUrls: ['./usersetting.component.css']
})
export class UsersettingComponent implements OnInit{
  Error:string;
  FirstName:string;
  Lastname:string;
  BackToken:string;

  constructor(private authService:RequestService,
              private router:Router){}

  ngOnInit(){}

  Change_User():void{
    if(!this.FirstName || !this.Lastname){
      this.Error = '未入力箇所があります';
      return;
    }
    this.BackToken = sessionStorage.getItem("token");
    this.authService.ChangeUserName(this.BackToken,this.FirstName, this.Lastname).subscribe(
      result => {
        this.Error = '更新成功';
        this.FirstName = '';
        this.Lastname = '';
      },
      error => console.log(error)
    );
  }
}
