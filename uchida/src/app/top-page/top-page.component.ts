import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params}  from '@angular/router';
import { RequestService} from './../request.service';
import {CookieService} from 'angular2-cookie/core';

import { ListviewComponent } from './../listview/listview.component';
import { TopAdminComponent } from './../top-admin/top-admin.component';
import { SettingComponent } from './../setting/setting.component';


@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {

  FitbitToken:string ="";
  BackToken:string ="";
  Admin:boolean = true;

  User:any = {
    Name : "",
    Weight:0,
    Height:0,
    Stress:true,
    ImageSrc:"",
    Id:0
  }
  public ListView:boolean = true;
  public TopAdmin:boolean = false;
  public Setting:boolean = false;

  constructor(private authService:RequestService,
              private router:Router,
              public cookie: CookieService) {
                if(!sessionStorage.getItem("token")){
                  this.router.navigate(['/']);
                }
                this.FitbitToken = this.cookie.get("access_token");
                this.BackToken = sessionStorage.getItem("token");
                this.User.Name = sessionStorage.getItem("username");
                this.User.Id = sessionStorage.getItem("userid");
                this.User.GroupId = sessionStorage.getItem("GroupId");

 }


  ngOnInit() {
    this.authService.getProfile(this.FitbitToken).subscribe(
      result => this.setProfile(result),
      error => console.log(error)
    );
  }

  Change_Setting():void {
    this.Setting = true;
    this.ListView = false;
    this.TopAdmin = false;
  }

  Change_TopAdmin():void {
    this.Setting = false;
    this.ListView = false;
    this.TopAdmin = true;
  }

  Change_ListView():void {
    this.Setting = false;
    this.ListView = true;
    this.TopAdmin = false;
  }

  Change_Logout():void{
    this.authService.logout(this.BackToken).subscribe(
      result => {
        sessionStorage.clear();
        this.router.navigate(['/']);

      },
      error => console.log(error)
    );
  }

  setProfile(data:any[]):void{
    this.User.Weight = data["user"].weight;
    this.User.Height = data["user"].height;
    this.User.ImageSrc = data["user"].avatar;

    this.authService.putProfile(this.BackToken, data["user"].encodedId, this.FitbitToken).subscribe(
      result => this.GetStress(),
      error => console.log(error)
    );
  }

  GetStress():void{
    this.authService.GetStress(this.BackToken).subscribe(
      result => this.enter(),
      error => console.log(error)
    );
  }

  enter():void{
    this.authService.enter(this.BackToken).subscribe(
      result => "",
      error => console.log(error)
    );
  }
}
