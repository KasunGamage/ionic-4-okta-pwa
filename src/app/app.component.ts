import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
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
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'power'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
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

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async logout(p: any){
    if (p.title === 'Logout') {
      await this.authenticationService.clear();
      this.oktaAuth.logout('login');
    }
  }

}
