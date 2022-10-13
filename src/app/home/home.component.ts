import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signInMode: boolean = false;

  constructor(
    private appService: AppService,
    private router: Router 
    ) { }

  ngOnInit(): void {
    this.signInMode = this.appService.signInMode;
  }

  onSignUp() {
    this.router.navigate(['/sign-up'])
  }

}
