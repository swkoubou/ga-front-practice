import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { LoginUserComponent } from './login-user/login-user.component';
import { LoginGroupComponent } from './login-group/login-group.component';
import { TopPageComponent } from './top-page/top-page.component';
import { TopAdminComponent } from './top-admin/top-admin.component';
import { SettingComponent } from './setting/setting.component';

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
    path:'logingroup',
    component:LoginGroupComponent
  },
  {
    path:'toppage',
    component:TopPageComponent
  },
  {
    path:'admin',
    component:TopAdminComponent
  },
  {
    path:'setting',
    component:SettingComponent
  }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
