import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authInfoService: AuthenticationService
    ) {}

  canActivate(): Observable<boolean> {
    return this.authInfoService.isAuthenticated();
  }
}