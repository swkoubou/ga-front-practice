import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute}  from '@angular/router';
import {CookieService, CookieOptionsArgs} from 'angular2-cookie/core';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.css']
})
export class BootComponent implements OnInit {

  constructor(private router:Router,
              private route:ActivatedRoute,
              public cookie: CookieService) { }

  //アクセストークンをクッキーに格納する
  ngOnInit(){
    var p = [];
    var pp = window.location.href.substring(1).split('#');
    var ppp = pp[1].split('&');
    var pppp = ppp[0].split('=');
    // sessionStorage.setItem(pppp[0],pppp[1]);
    let key = pppp[0];
    let value = pppp[1];
    let opts: CookieOptionsArgs = {
      expires: this.getToday()
    };
    this.cookie.put(key,value,opts);
    this.router.navigate(['/toppage']);
  }

  //クッキーを格納した日付を記録する
  public getToday() {
      var date = new Date();
      let YYYY = date.getFullYear();
      let Mon = this.zero(date.getMonth() + 1);
      let DD = this.zero(date.getDate() + 7);
      // var ary = ["Sun","Mon","Tus","Web","Ths","Fri","Sta"];
      let Wdy = date.getDay();
      let HH = date.getHours();
      let MM = date.getMinutes();
      let SS = date.getSeconds();
      // Wdy, DD Mon YYYY HH:MM:SS GMT"
      console.log(Wdy+", "+DD+" "+Mon+" "+YYYY+" "+HH+":"+MM+":"+SS+" GMT");
      return Wdy+", "+DD+" "+Mon+" "+YYYY+" "+HH+":"+MM+":"+SS+" GMT";
    }

    //１桁の場合0で埋める
    public zero(num) {
      num += "";
      if (num.length === 1) {
        num = "0" + num;
      }
      return num;
    }

}
