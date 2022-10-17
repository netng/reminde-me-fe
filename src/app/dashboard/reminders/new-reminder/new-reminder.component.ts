import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/auths/services/auth/auth.service';
import { BaseReminder, Reminder } from 'src/app/shared/models/reminder.interface';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.css']
})
export class NewReminderComponent implements OnInit {

  @Output() remindersEmitter = new EventEmitter<Reminder>();

  reminder: BaseReminder = {
    title: '',
    description: ''
  }

  userId!: number;

  display: boolean = false;

  constructor(
    private appService: AppService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userId = this.authService.getDecodedToken().sub;
  }

  showCreateNewReminderForm() {
    this.display = true;
  }

  onCreateNewReminder() {
    this.appService.createNewReminder(this.userId, this.reminder)
      .subscribe({
        next: (data) => {
          this.remindersEmitter.emit(data.data);
        },
        error: (err) => {
          console.log(err);
        }
      })

    console.log(this.reminder);
    this.display = false;
    this.reminder = {} as BaseReminder;
  }

}
