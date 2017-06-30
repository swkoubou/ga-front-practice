import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { Page1Component } from './page1/page1.component'

const appRoutes:Routes = [
  {
    path:'**',
    component:Page1Component
  }
]
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
