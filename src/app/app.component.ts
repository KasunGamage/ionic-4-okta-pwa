import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthenticationService } from './services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{
  isAuthenticated: boolean;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'power'
    }
  ];

  constructor(
    private platform: Platform,
    private oktaAuth: OktaAuthService,
    private navCtrl: NavController,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
    this.authenticationService.authenticationState.subscribe((state: boolean) => {
      console.log('hi', state);
      if (state) {
        this.navCtrl.navigateRoot('home');
      } else if (!state && this.router.url.startsWith('/implicit/callback')) {
        console.log('callback');
      } else {
        this.navCtrl.navigateRoot('login');
      }
    });
  }

  async initializeApp() {
    await this.platform.ready();
  }

  async logout(p: any){
    if (p.title === 'Logout') {
      await this.authenticationService.clear();
      this.oktaAuth.logout('login');
    }
  }

}
