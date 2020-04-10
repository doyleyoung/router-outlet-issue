import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolidAuthService } from '../../../../services/solid-auth/solid-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  styles: [':host { height: 100% !important; }']
})
export class LoginPage implements OnInit {

  constructor(private solidAuthService: SolidAuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.solidAuthService.login();
  }
}
