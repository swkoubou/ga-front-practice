import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { uhoDirective} from './uho.directive';
import { AppComponent } from './app.component';
import { ChildComponent} from './uhi.component';

@NgModule({
  declarations: [
    AppComponent,
    uhoDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
