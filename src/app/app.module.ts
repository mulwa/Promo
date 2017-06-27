import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyProvider } from '../providers/my/my';
import {MoredetailsPage} from '../pages/moredetails/moredetails';
export  const firebaseConfig = {
    apiKey: "AIzaSyD5JWb6IBcDJMIai9Y1LiwKKrnpiNSj7ec",
    authDomain: "itmonitor-bad15.firebaseapp.com",
    databaseURL: "https://itmonitor-bad15.firebaseio.com",
    projectId: "itmonitor-bad15",
    storageBucket: "itmonitor-bad15.appspot.com",
    messagingSenderId: "1032860006145"
  };


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MoredetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MoredetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
     AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyProvider
  ]
})
export class AppModule {}
