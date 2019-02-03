import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';
import {Timeslot} from '../interfaces/timeslot.interface';
import {Class} from '../interfaces/class.interface';


export const emptytimeslot: Timeslot = {
  time: '',
  Monday: '',
  Tuesday: '',
  Wednesday: '',
  Thursday: '',
  Friday: '',
  Saturday: '',
  Sunday: ''
};

@Injectable({
 providedIn: 'root'
})
export class TimetableService {

  constructor(private http: HttpClient) {}

  getClassesBetweenDates(startDate, endDate): Promise<Array<Class>> {
    return <Promise<Array<Class>>>this.http.post(
      environment.classAPIEndpoint + 'getclassesbetweendates',
      {startDate: startDate, endDate: endDate}
      ).toPromise();
  }

  getNextClasses(): Promise<Array<Class>> {
    return <Promise<Array<Class>>>this.http.post(
      environment.classAPIEndpoint + 'getnextclasses',
      {numberOfClasses: 2}
      ).toPromise();
  }

  getNewTimeSlot(aclass: Class): Timeslot {
    const newTime = {...emptytimeslot};
    newTime.time = moment(aclass.date).format('h:mma');
    newTime[moment(aclass.date).format('dddd')] = aclass.classType;
    return newTime;
  }
}
