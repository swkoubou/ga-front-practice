import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import {AppComponent} from './app.component';
import { MemberDetailComponent } from './member-detail.component';
import {MembersComponent } from './members.component';
import { MemberService } from './member-service';
import { Routing } from './routing';
import { MemberSearchComponent } from './member-search.component';

import './rxjs-extensions';

@NgModule({
  declarations: [
    AppComponent,
    MemberDetailComponent,
    MembersComponent,
    MemberSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
