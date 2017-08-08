import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params}  from '@angular/router';
import { RequestService} from './../request.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit{
  Error:string;
  MailAdress:string;
  PassWord:string;
  Gender:string;
  LastName:string;
  FirstName:string;
  Token:string;

constructor(private request:RequestService,
                private router:Router){
                  this.Token = sessionStorage.getItem("token");
                }

  ngOnInit(){}

  Create_User():void{
    if(!this.MailAdress || !this.PassWord || !this.FirstName || !this.LastName || !this.Gender){
      this.Error = '未入力項目があります';
      return;
    }

    this.request.create_user(this.MailAdress, this.PassWord, this.FirstName, this.LastName, this.Gender, this.Token).subscribe(
      result => this.Result_Process(result),
      error => console.log(error)
    );
  }


  Result_Process(result:any){
    if(result.code){
      this.Error = 'この入力データでは作成できません';
      return;
    }

    this.MailAdress = '';
    this.PassWord = '';
    this.FirstName = '';
    this.LastName = '';
    this.Gender = '';
    this.Error = '作成成功';
  }

}
