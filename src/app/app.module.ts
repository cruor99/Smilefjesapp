import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details'
import { AboutPage } from '../pages/about/about'
import { SmileysComponent } from './smileys/smileys.component'
import { SmileysDetailComponent } from './smileys/smileysdetail.component'

@NgModule({
  declarations: [
    MyApp,
      HomePage,
      SmileysComponent,
      DetailsPage,
      AboutPage,
      SmileysDetailComponent
  ],
  imports: [
    BrowserModule,
      IonicModule.forRoot(MyApp),
      HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      HomePage,
      DetailsPage,
      AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
