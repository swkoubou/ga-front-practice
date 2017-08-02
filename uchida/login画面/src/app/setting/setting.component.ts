import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';

import { UserlistComponent } from './../userlist/userlist.component';
import { UsersettingComponent } from './../usersetting/usersetting.component';
import { CreateuserComponent } from './../createuser/createuser.component';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent implements OnInit {
  public admin:boolean = true;
  public userlist:boolean = false;
  public usersetting:boolean = true;
  public createuser:boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Change_UserSetting():void {
    this.usersetting = true;
    this.userlist = false;
    this.createuser = false;
  }

  Change_CreateUser():void {
    this.usersetting = false;
    this.userlist = false;
    this.createuser = true;
  }

  Change_UserList():void {
    this.usersetting = false;
    this.userlist = true;
    this.createuser = false;
  }

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
