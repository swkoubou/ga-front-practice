import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { AbePage } from '../pages/abe/abe';
import { HisaPage } from '../pages/hisa/hisa';
import { Nishi3Page } from '../pages/nishi3/nishi3';
import { UchidaPage } from '../pages/uchida/uchida';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AbePage,
    HisaPage,
    Nishi3Page,
    UchidaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AbePage,
    HisaPage,
    Nishi3Page,
    UchidaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
