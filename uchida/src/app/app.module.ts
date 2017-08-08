import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginGroupComponent } from './login-group/login-group.component';
import { TopPageComponent } from './top-page/top-page.component';
import { TopAdminComponent } from './top-admin/top-admin.component';
import { SettingComponent } from './setting/setting.component';
import { UsersettingComponent } from './usersetting/usersetting.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ListviewComponent } from './listview/listview.component';
import { ModalComponent } from './userlist/modal/modal.component';
import { BootComponent } from './boot/boot.component';
import { CompleteComponent } from './userlist/complete/complete.component';

import { ModalService } from './userlist/modal/modal.service';
import { RequestService} from './request.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import {routing} from './app.routing';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CreategroupComponent } from './creategroup/creategroup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    LoginGroupComponent,
    TopPageComponent,
    TopAdminComponent,
    SettingComponent,
    UsersettingComponent,
    CreateuserComponent,
    UserlistComponent,
    ModalComponent,
    CompleteComponent,
    ListviewComponent,
    BootComponent,
    CreategroupComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ChartsModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    ModalService,
    RequestService,
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CompleteComponent]
})
export class AppModule { }
