import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { LoginUserComponent } from './login-user/login-user.component';
import { LoginGroupComponent } from './login-group/login-group.component';
import { TopPageComponent } from './top-page/top-page.component';
import { BootComponent } from './boot/boot.component';
import { CreategroupComponent} from './creategroup/creategroup.component';

const appRoutes:Routes = [
  {
    path:'',
    component:LoginGroupComponent
  },
  {
    path:'loginuser',
    component:LoginUserComponent
  },
  {
    path:'toppage',
    component:TopPageComponent
  },
  {
    path:'boot',
    component:BootComponent
  },
  {
    path:'creategroup',
    component:CreategroupComponent
  }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
