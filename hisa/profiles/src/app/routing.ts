/**
 * Created by 1521038 on 2017/05/17.
 */
import {ModuleWithProviders} from "@angular/core";
import { Routes,RouterModule }from '@angular/router';

import { AppComponent } from './app.component';
import { MembersComponent } from './members.component';
import { MemberDetailComponent } from './member-detail.component';

const routes:Routes=[
  {path:'members',component:MembersComponent},
  {path:'detail/:id',component:MemberDetailComponent}
]

export const Routing:ModuleWithProviders=RouterModule.forRoot(routes)
