import { Component, EventEmitter } from '@angular/core';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar.page.component.html',
  styleUrls: ['./calendar.page.component.css']
})
export class CalendarPageComponent {
  model!: NgbDateStruct;
  date!: {year: number, month: number};
  $dateOutput = new EventEmitter<NgbDate>();

  constructor() {
  }
  dateSelected(date: NgbDate) {
    this.$dateOutput.emit(date);
  }

}
