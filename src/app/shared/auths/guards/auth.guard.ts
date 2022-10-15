import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (!this.authService.isAuthenticated()) {
        this.setRequireLoginMessage();
        this.router.navigate(['sign-in']);
      }
      return true;
  }

  setRequireLoginMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please sign in to start something awesome :)'
    });
  }
  
}
