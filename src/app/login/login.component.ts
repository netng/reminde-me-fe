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

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    if (this.authService.isRegisterSuccessfull) {
      this.getMessageOnRegisterSuccessfull();
      this.authService.isRegisterSuccessfull = false;
    }
  }

  onSignUp() {
    this.router.navigate(['/sign-up']);
  }

  getMessageOnRegisterSuccessfull(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Register success. You can Sign In now!'
    });
  }

}
