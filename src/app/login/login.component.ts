import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../shared/auths/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    if (this.authService.isRegisterSuccessfull) {
      this.onRegisterSuccess();
    }
  }

  ngOnInit(): void {
  }

  onSignUp() {
    this.router.navigate(['/sign-up']);
  }

  onRegisterSuccess(): void {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Register success. You can Sign In now!'
        });
  }

}
