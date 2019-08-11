import { Injectable } from '@angular/core';
import { LocalStorageService } from '../utilities/local-storage.service';
import { Platform } from '@ionic/angular';
import { AuthInfo } from '../../models/auth-info';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { LocalStorage } from '../../constans/local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState: Subject<boolean> = new ReplaySubject<boolean>(1);

  constructor(
    private localStorageService: LocalStorageService,
    private plt: Platform
  ) {
    this.plt.ready().then(() => {
      this.checkAuthenticationState();
    });
  }

  async checkAuthenticationState(): Promise<void> {
    try {
      const response = await this.localStorageService.get(
        LocalStorage.USER_INFO
      );
      if (response) {
        this.authenticationState.next(true);
      } else {
        this.authenticationState.next(false);
      }
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  }

  isAuthenticated(): Observable<boolean> {
    return this.authenticationState.asObservable();
  }

  async get(): Promise<AuthInfo> {
    try {
      const response: AuthInfo = await this.localStorageService.get(
        LocalStorage.USER_INFO
      );
      return response;
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  }

  async set(authData): Promise<any> {
    try {
      const response = await this.localStorageService.set(
        LocalStorage.USER_INFO,
        authData
      );
      if (response) {
        this.authenticationState.next(true);
      }
      return response;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  async clear(): Promise<any> {
    try {
      const response = await this.localStorageService.remove(
        LocalStorage.USER_INFO
      );
      this.authenticationState.next(false);
      return response;
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  }
}
