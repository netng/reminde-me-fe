import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../shared/auths/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    if (this.authService.isRegisterSuccessfull) {
      this.setRegisterSuccessfullMessage();
      this.authService.isRegisterSuccessfull = false;
      this.email = this.authService.newRegisteredUser.data.email;
    }

  }

  onSignIn() {
    this.authService.signIn(this.email, this.password).subscribe({
      next: data => {
        localStorage.setItem('access_token', data.data.accessToken);
        this.authService.authenticatedUser = data;
        this.authService.isLogInSuccessfull = true;
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.setLoginFailedMessage();
      }
    })

  }

  onSignUp() {
    this.router.navigate(['/sign-up']);
  }

  setRegisterSuccessfullMessage(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Register success. You can Sign In now!'
    });
  }

  setLoginFailedMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: this.errorMessage
    });
  }

}
