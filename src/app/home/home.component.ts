import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signInMode: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.signInMode = this.appService.signInMode;
  }

}
