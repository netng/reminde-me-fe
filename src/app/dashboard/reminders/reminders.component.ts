import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from 'src/app/shared/auths/services/auth/auth.service';
import { BaseResponseDto } from 'src/app/shared/dtos/base-response-dto';
import { Reminder } from 'src/app/shared/models/reminder.interface';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  reminders: BaseResponseDto<Reminder[]> = {} as BaseResponseDto<Reminder[]>;

  constructor(
    private primeConfig: PrimeNGConfig,
    private appService: AppService,
    private authService: AuthService
    ) {
    }

  ngOnInit(): void {
    this.primeConfig.ripple = true;
      this.getUserReminders();
  }

  getUserReminders() {
    let id = this.authService.getDecodedToken().sub;
    console.log(`User id ${id}`);
    this.appService.getUserReminders(id)
      .subscribe({
        next: (data) => {
          this.reminders = data;
          console.log(this.reminders);
        },
        error: err => {
          console.log(err);
        }
      });
  }

  onCreateNewReminder(reminder: Reminder) {
    this.reminders.data.push(reminder);
  }

}
