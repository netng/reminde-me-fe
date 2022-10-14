import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from '../shared/auths/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    if (this.authService.isLogInSuccessfull) {
      this.setLoginSuccessfullMessage();
      this.authService.isLogInSuccessfull = false;
    }
  }

  setLoginSuccessfullMessage(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Login successful, awesome experience is ready to begin!'
    });

  }

}
