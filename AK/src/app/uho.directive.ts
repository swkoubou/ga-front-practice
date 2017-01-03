import {Directive,ElementRef,Renderer}from '@angular/core';

@Directive({ //ディレクティブの定義付け
  selector: '[uho]'
})
export class uhoDirective{
  constructor(private el: ElementRef,private renderer:Renderer){
    this.renderer.setElementStyle(this.el.nativeElement,'background-color','yellow');
  }
}

//ElementRef ・・・HTMLへのアクセス
//Renderer ・・・要素の修飾
