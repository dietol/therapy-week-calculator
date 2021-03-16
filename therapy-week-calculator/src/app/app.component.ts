import { Component } from '@angular/core';
import * as moment from 'moment';
import {FormControl} from '@angular/forms';

export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD.MM.YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Therapie Wochen Berechner';
  startDate = new FormControl();
  currentDate = new FormControl();
  startWeek = -1;
  currentWeek = -1;
  result = -1;

    constructor() {
        this.calculateWeekNumber();
    }

    calculateWeekNumber(): void {
        if (this.startDate.value && this.currentDate.value) {
            const startDateMoment = moment(this.startDate.value).startOf('isoWeek');
            const currentDateMoment = moment(this.currentDate.value).startOf('isoWeek');

            this.startWeek = startDateMoment.isoWeek();
            this.currentWeek = currentDateMoment.isoWeek();
            this.result = currentDateMoment.diff(startDateMoment, 'weeks');

        }
    }
}
