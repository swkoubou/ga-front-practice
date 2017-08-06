import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';
import { RequestService} from '../request.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private router:Router,
              private request:RequestService) { }

  ngOnInit() {
  }

  Mailadress:string;
  Password:string;
  error:string = '';

  UserLogin():void{
    if(!this.Mailadress || !this.Password){
      this.error = 'ユーザーネームとパスワードを入力してください';
      return;
    }
    console.log(this.Mailadress + this.Password);
    window.location.href = 'https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=228Q3J&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Ftoppage&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800';
  }

  Back_Page():void{
  this.router.navigate(['/']);
  }
}
