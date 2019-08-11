import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth/authentication.service';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthInfo } from '../models/auth-info';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  authInfo = new AuthInfo();

  constructor(private authenticationService: AuthenticationService, private oktaAuthService: OktaAuthService) {
  }

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    const user = await this.oktaAuthService.getUser();
    console.log(user);
    if (user) {
    this.authInfo.Email = user.preferred_username;
    this.authInfo.FullName = user.given_name + user.family_name;
    this.authInfo.Username = user.preferred_username;
    this.authInfo.token = user.sub;
    this.authenticationService.set(this.authInfo);
    }
  }

}
