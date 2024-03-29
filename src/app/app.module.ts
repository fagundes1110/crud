import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { ContactProvider } from '../providers/contact/contact';
import { ProdutoPage } from '../pages/produto/produto';
import { logincliPage } from '../pages/logincliente/logincli';

@NgModule({
  declarations: [
    MyApp,
    logincliPage,
    HomePage,
    ProdutoPage,
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,logincliPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    ContactProvider
  ]
})
export class AppModule {}
