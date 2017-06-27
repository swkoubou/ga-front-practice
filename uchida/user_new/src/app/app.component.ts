import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  fa:string;

  constructor(private element: ElementRef) {}

  uho(event):void {
    var Data:File = event.target.files[0];
    if(Data.type.indexOf("image") < 0){
      alert("画像以外渡すなクソ");
      return;
    }

    var image = this.element.nativeElement.querySelector('.image');
    var reader = new FileReader();
    reader.onload = function() {
        var src = reader.result;
        image.src = src;
    };
    reader.readAsDataURL(event.target.files[0]);
  }



}
