import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auths/services/auth/auth.service';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
    ) { 
      this.isAuthenticated = this.authService.isAuthenticated();
    }

  ngOnInit(): void {
  }

  onSignIn() {

    this.router.navigate(['/sign-in']);
  }

}
