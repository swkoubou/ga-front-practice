import { Component } from '@angular/core';
import { uhoDirective} from './uho.directive';
import { ChildComponent} from './uhi.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'うっほーーーー';
}
