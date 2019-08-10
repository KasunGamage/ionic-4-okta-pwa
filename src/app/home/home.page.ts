import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  isAuthenticated: boolean;

  constructor(private oktaAuth: OktaAuthService) {}

  login() {
    this.oktaAuth.loginRedirect();
  }

  logout() {
    this.oktaAuth.logout('home');
  }

  ngOnInit() {
    this.oktaAuth.isAuthenticated().then((auth) => {this.isAuthenticated = auth});
  }

}
