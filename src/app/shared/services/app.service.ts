import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponseDto } from '../dtos/base-response-dto';
import { Reminder } from '../models/reminder.interface';

const API_URL: string = `${environment.apiUrl}/api/v1`;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AppService {
  signInMode: boolean = false;

  constructor(private http: HttpClient) { }

  getUserReminders(id: number): Observable<BaseResponseDto<Reminder[]>> {
    return this.http.get<BaseResponseDto<Reminder[]>>(`${API_URL}/users/${id}/reminders`, { headers: httpOptions.headers});
  }

}
