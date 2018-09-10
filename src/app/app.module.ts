import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { CollectionsPage } from '../pages/collections/collections';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AuthService } from '../services/auth';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { CollectionsService } from '../services/collections.service';
import { ItemsPage } from '../pages/items/items';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CollectionsPage,
    DashboardPage,
    LoginPage,
    SignupPage,
    ItemsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CollectionsPage,
    DashboardPage,
    LoginPage,
    SignupPage,
    ItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    CollectionsService,
    { provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ]
})
export class AppModule {}
