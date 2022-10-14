import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseUser, User } from '../shared/auths/models/user.interface';
import { AuthService } from '../shared/auths/services/auth/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: BaseUser = {
    full_name: '',
    username: '',
    email: '',
    password: '',
    time_zone: ''
  };

  isRegisterSuccessful: boolean = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  onSignIn() {
    this.router.navigate(['/sign-in']);
  }

  onRegister(): void {
    const { full_name, username, email, password, time_zone='Asia/Jakarta' } = this.user;
    
    this.authService.register(
      full_name,
      username,
      email,
      password,
      time_zone
    ).subscribe({
      next: data => {
        console.log(data);
        this.authService.newRegisteredUser = data;
        this.isRegisterSuccessful = true;
        this.authService.isRegisterSuccessfull = true;
        this.router.navigate(['/sign-in']);
      },
      error: err =>  {
        this.errorMessage = err.error.message;
        this.setRegisterFailedMessage();
      }
    })
  }

  setRegisterFailedMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: this.errorMessage
    });
  }
}
