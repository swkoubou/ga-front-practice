import { Component } from '@angular/core';

import { AbePage } from '../abe/abe';
import { HisaPage } from '../hisa/hisa';
import { Nishi3Page } from '../nishi3/nishi3';
import { UchidaPage } from '../uchida/uchida';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = AbePage;
  tab2Root: any = HisaPage;
  tab3Root: any = Nishi3Page;
  tab4Root: any =  UchidaPage;

  constructor() {

  }
}
