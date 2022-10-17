import { Component, Input, OnInit } from '@angular/core';
import { BaseResponseDto } from '../shared/dtos/base-response-dto';
import { Schedule } from '../shared/models/schedule.interface';
import { AppService } from '../shared/services/app.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  @Input() reminderId!: number;
  schedules: BaseResponseDto<Schedule[]> = {} as BaseResponseDto<Schedule[]>;

  constructor(
    private appService: AppService
  ) {
  }

  ngOnInit(): void {
    this.getReminderSchedules();
  }

  getReminderSchedules() {
    this.appService.getReminderSchedules(this.reminderId)
      .subscribe({
        next: (data) => {
          this.schedules = data;
        },
        error: (err) => {
          console.log(err);
        }

      });
  }

  onCreateNewReminderSchedule(schedule: Schedule) {
    this.schedules.data.push(schedule);
  }

}
