import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Change_Page():void{
    this.router.navigate(['/toppage']);
  }
}
