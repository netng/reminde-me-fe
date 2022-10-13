import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isSignedIn: boolean = false;
  signInMode: boolean = false;

  constructor(
    private router: Router,
    private appService: AppService
    ) { }

  ngOnInit(): void {
  }

  onSignIn() {
    this.signInMode = !this.appService.signInMode;
    this.router.navigate(['/sign-in']);
  }

}
