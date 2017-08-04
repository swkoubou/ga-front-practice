import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';

@Component({
  selector: 'app-login-group',
  templateUrl: './login-group.component.html',
  styleUrls: ['./login-group.component.css']
})
export class LoginGroupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Change_Page():void{
    this.router.navigate(['/loginuser']);
  }
}
