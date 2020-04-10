import { Component, OnInit } from '@angular/core';
import { SolidAuthService } from '../../services/solid-auth/solid-auth.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  styles: [':host { height: 100% !important; }']
})
export class DashboardPage implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Add',
      url: { outlets: { secondary: ['folder', 'Add']} },
      icon: 'add'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private solidAuthService: SolidAuthService,
    private router: Router,
    private authService: SolidAuthService
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
