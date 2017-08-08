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
  public Admin:boolean = true;
  public UserList:boolean = false;
  public UserSetting:boolean = true;
  public CreateUser:boolean = false;
  public SelectUserSetting:boolean = true;
  public SelectCreateUser:boolean = false;
  public SelectUserList:boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Change_UserSetting():void {
    this.UserSetting = true;
    this.UserList = false;
    this.CreateUser = false;

    this.SelectUserSetting = true;
    this.SelectCreateUser = false;
    this.SelectUserList = false;
  }

  Change_CreateUser():void {
    this.UserSetting = false;
    this.UserList = false;
    this.CreateUser = true;

    this.SelectUserSetting = false;
    this.SelectCreateUser = true;
    this.SelectUserList = false;
  }

  Change_UserList():void {
    this.UserSetting = false;
    this.UserList = true;
    this.CreateUser = false;

    this.SelectUserSetting = false;
    this.SelectCreateUser = false;
    this.SelectUserList = true;
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
