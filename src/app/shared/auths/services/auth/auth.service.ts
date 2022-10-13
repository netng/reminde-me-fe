import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUser, User } from '../../models/user.interface';

const AUTH_API: string = 'http://localhost:8080/api/v1/auth';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isRegisterSuccessfull: boolean = false;

  constructor(private http: HttpClient) { }

  register(
    full_name: string, 
    username: string,
    email: string,
    password: string,
    time_zone: string
  ): Observable<BaseUser> {
    return this.http.post<BaseUser>(
      `${AUTH_API}/signup`,
      {
        full_name,
        username,
        email,
        password,
        time_zone
      },
      httpOptions
    );
  }
}
