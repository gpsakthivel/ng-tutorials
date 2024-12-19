import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  // minDate: Date = new Date();
  // maxDate: Date = new Date(2019, 3, 10);

  constructor() { }

  ngOnInit(): void {
  }

  dateFilter = (date: Date | null) => {
    const day = date?.getDay();
    return day !== 0 && day !== 6;
  }
}
