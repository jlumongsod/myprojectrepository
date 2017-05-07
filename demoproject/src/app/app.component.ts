import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthPage } from '../pages/auth/auth';
import { AuthService } from './services/auth.service';
import { RegisterService } from './services/register.service';

@Component({
  templateUrl: 'app.html',
  providers: [AuthService, RegisterService]
})
export class MyApp {
  rootPage:any = AuthPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
