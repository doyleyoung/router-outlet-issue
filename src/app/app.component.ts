import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { SolidAuthService } from './services/solid-auth/solid-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private solidAuthService: SolidAuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.solidAuthService.authenticationState.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate([
          '',
          {
            outlets: {
              primary: ['members', 'dashboard']
            }
          }
        ]);
      } else {
        this.router.navigate([
          '',
          {
            outlets: {
              primary: ['login']
            }
          }
        ]);
      }
    });
  }

  ngOnInit() {
  }
}
