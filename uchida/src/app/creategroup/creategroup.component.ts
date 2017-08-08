import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';
import { RequestService} from '../request.service';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent implements OnInit {
  constructor(private router:Router,
              private request:RequestService) { }

  ngOnInit() {
  }

  MailAdress:string;
  PassWord:string;
  GroupName:string;
  FirstName:string;
  LastName:string;
  Sex:string;

  error:string = '';
  Success:boolean = false;

  UserLogin():void{
    if(!this.MailAdress || !this.PassWord || !this.GroupName || !this.FirstName || !this.LastName || !this.Sex){
      this.error = '未入力項目があります';
      return;
    }

    this.request.create_group(this.MailAdress, this.PassWord, this.GroupName, this.FirstName, this.LastName, this.Sex).subscribe(
      result => this.Result_Process(result),
      error => console.log(error)
    );
  }

  Back_Page():void{
  this.router.navigate(['/']);
  }

  Result_Process(result:any){
    if(result.code){
      this.error = 'グループ名が重複しているので作成できません';
      return;
    }
    this.Success = true;
  }

}
