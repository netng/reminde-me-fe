import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponseDto } from '../dtos/base-response-dto';
import { BaseReminder, Reminder } from '../models/reminder.interface';
import { BaseSchedule, Schedule } from '../models/schedule.interface';

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

  getUserReminders(userId: number): Observable<BaseResponseDto<Reminder[]>> {
    return this.http
      .get<BaseResponseDto<Reminder[]>>(
        `${API_URL}/users/${userId}/reminders`,
        { 
          headers: httpOptions.headers
        });
  }

  getReminderSchedules(reminderId: number): Observable<BaseResponseDto<Schedule[]>> {
    return this.http
      .get<BaseResponseDto<Schedule[]>>(
        `${API_URL}/reminders/${reminderId}/schedules`,
        {
          headers: httpOptions.headers
        });
  }

  createNewReminder(userId: number, reminder: BaseReminder): Observable<BaseResponseDto<Reminder>> {
    return this.http
      .post<BaseResponseDto<Reminder>>(
        `${API_URL}/users/${userId}/reminders`, reminder, {
          headers: httpOptions.headers
        });
  }

  createNewReminderSchedule(reminderId: number, schedule: BaseSchedule): Observable<BaseResponseDto<Schedule>> {
    return this.http
      .post<BaseResponseDto<Schedule>>(
        `${API_URL}/reminders/${reminderId}/schedules`, schedule, {
          headers: httpOptions.headers
        });
  }

}
