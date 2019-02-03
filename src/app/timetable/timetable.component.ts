import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {TimetableService} from './timetable.service';
import * as moment from 'moment';
import * as _ from 'underscore';
import {Timeslot} from '../interfaces/timeslot.interface';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  calendarClasses: Array<Timeslot> = [];
  nextclasses;

  constructor(private timetableService: TimetableService) { }

  ngOnInit() {
    this.timetableService.getClassesBetweenDates(moment(), moment().add(1, 'week')).then((results) => {
      this.calendarClasses = this.setCalendarClasses(results);
    });

    this.timetableService.getNextClasses().then((results) => {
      this.nextclasses = results;
    });
  }

  setCalendarClasses(results) {

    const settingCalendarClasses = [];
    _.each(results, (aclass) => {

      const calendarClass = _.find(settingCalendarClasses, (acalendarClass) => {
        return acalendarClass.time === moment(aclass.date).format('h:mma');
      });

      if (!calendarClass) {
        settingCalendarClasses.push(this.timetableService.getNewTimeSlot(aclass));
      }

      if (calendarClass) {
        settingCalendarClasses[moment(aclass.date).format('dddd')] = aclass.classType;
      }
    });

    return settingCalendarClasses;

  }

}
