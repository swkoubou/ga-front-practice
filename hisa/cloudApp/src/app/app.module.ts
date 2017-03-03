import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {JsonpModule} from "@angular/http";
import {HttpService} from "./http.service";
import {Ng2BootstrapModule} from "ng2-bootstrap/ng2-bootstrap";
import {DetailComponent} from "./detail.component";
//import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   // HttpModule
    JsonpModule,
    Ng2BootstrapModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
