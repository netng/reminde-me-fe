import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../shared/auths/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    if (this.authService.isRegisterSuccessfull) {
      this.onRegisterSuccess();
      this.authService.isRegisterSuccessfull = false;
    }
  }

  ngOnChanges(): void {
  }

  onSignUp() {
    this.router.navigate(['/sign-up']);
  }

  onRegisterSuccess(): void {
    console.log('onRegisterSuccess');
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Register success. You can Sign In now!'
    });
  }

}
