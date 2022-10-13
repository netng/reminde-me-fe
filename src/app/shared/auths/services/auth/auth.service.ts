import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseDto } from 'src/app/shared/dtos/base-response-dto';
import { environment } from 'src/environments/environment';
import { BaseUser, User } from '../../models/user.interface';

const AUTH_API: string = `${environment.apiUrl}/api/v1/auth`;

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
  user: BaseResponseDto<User> = {} as BaseResponseDto<User>;

  constructor(private http: HttpClient) { }

  register(
    full_name: string, 
    username: string,
    email: string,
    password: string,
    time_zone: string
  ): Observable<BaseResponseDto<User>> {
    return this.http.post<BaseResponseDto<User>>(
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
