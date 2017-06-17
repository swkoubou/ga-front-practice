import { Component, OpaqueToken, Inject } from '@angular/core';

//文字列やオブジェクトをトークンと紐づけることができる
export const COMPLETE_TEXT_TOKEN = new OpaqueToken('complete.text');

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent {
  public name: string;
  public email: string;

  // @inject...外のコンポーネントから値がもらえる
  constructor(@Inject(COMPLETE_TEXT_TOKEN) t: any) {
    this.name = t.name;
    this.email = t.email;
  }
}
