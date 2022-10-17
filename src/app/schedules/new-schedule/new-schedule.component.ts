import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseSchedule, Schedule } from 'src/app/shared/models/schedule.interface';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.css']
})
export class NewScheduleComponent implements OnInit {

  @Input() reminderId!: number;
  @Output() scheduleEmitter = new EventEmitter<Schedule>();

  schedule: BaseSchedule = {
    reminder_date_time: ''
  }

  display: boolean = false;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }

  onCreateNewReminderSchedule() {
    this.appService.createNewReminderSchedule(this.reminderId, this.schedule)
      .subscribe({
        next: (data) => {
          this.scheduleEmitter.emit(data.data);
        },
        error: (err) => {

        }
      });

    this.display = false;
    this.schedule.reminder_date_time = '';

  }

  showCreateNewScheduleForm() {
    this.display = true;
  }

}
