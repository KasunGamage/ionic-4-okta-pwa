import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private oktaAuth: OktaAuthService) { }

  ngOnInit() {
  }

  login() {
    this.oktaAuth.loginRedirect('/callback');
  }

}
