import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../services/auth';
import { LoginPage } from '../pages/login/login';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage = TabsPage;
  loginPage = LoginPage;
  @ViewChild(Nav) nav: Nav;
  authChanged: Subscription;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
      private authService: AuthService) {
        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          statusBar.styleDefault();
          splashScreen.hide();
          this.isAuthenticated();
    });
  }

  isAuthenticated() {
    const auth = this.authService.isAuthenticated();
    if(!auth) {
      this.nav.setRoot(this.loginPage)
    } else {
      this.nav.setRoot(this.rootPage);
    }
  }

  ngOnInit() {
    this.authChanged = this.authService.authChange
      .subscribe(() => {
        this.isAuthenticated();
      });
  }

}



