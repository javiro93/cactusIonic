import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MyApp } from './app.component';

import { MisReservasPage } from '../pages/misReservas/misReservas';
import { AddReservasPage } from '../pages/addReservas/addReservas';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
  apiKey: "AIzaSyAJOu4b0IBQ5H5aahoRt2aQufCb5TYNzrs",
  authDomain: "cactus-cbf47.firebaseapp.com",
  databaseURL: "https://cactus-cbf47.firebaseio.com",
  projectId: "cactus-cbf47",
  storageBucket: "cactus-cbf47.appspot.com",
  messagingSenderId: "788992151711"
}

@NgModule({
  declarations: [
    MyApp,
    MisReservasPage,
    AddReservasPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MisReservasPage,
    AddReservasPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
