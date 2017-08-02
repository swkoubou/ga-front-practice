import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginGroupComponent } from './login-group/login-group.component';
import { TopPageComponent } from './top-page/top-page.component';
import { TopAdminComponent } from './top-admin/top-admin.component';
import { SettingComponent } from './setting/setting.component';
import { UsersettingComponent } from './usersetting/usersetting.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserlistComponent } from './userlist/userlist.component';

import { ModalComponent } from './userlist/modal/modal.component';
import { ModalService } from './userlist/modal/modal.service';
import { CompleteComponent } from './userlist/complete/complete.component';

import {routing} from './app.routing';
import { ChartsModule } from 'ng2-charts/ng2-charts';


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
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ChartsModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
  entryComponents: [CompleteComponent]
})
export class AppModule { }
