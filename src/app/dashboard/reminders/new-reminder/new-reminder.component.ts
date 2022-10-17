import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-reminder',
  templateUrl: './new-reminder.component.html',
  styleUrls: ['./new-reminder.component.css']
})
export class NewReminderComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showCreateNewReminderForm() {
    this.display = true;

  }

}
