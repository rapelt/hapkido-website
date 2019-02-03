import { TestBed, inject } from '@angular/core/testing';
import {TimetableService} from './timetable.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Class} from '../interfaces/class.interface';
import {Timeslot} from '../interfaces/timeslot.interface';

describe('TimetableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimetableService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([TimetableService], (service: TimetableService) => {
    expect(service).toBeTruthy();
  }));

  it('getNewTimeSlot should be create a new timetableslot', inject([TimetableService], (service: TimetableService) => {
    const date = new Date('12/12/2018');

    const aclass: Class = {
      date: date,
      attendance: [],
      classId: 2,
      classType: 'Family',
      isGrading: false,
      startTime: '12:00'
    };

    const emptytimeslot: Timeslot = {
      time: '12:00am',
      Monday: '',
      Tuesday: '',
      Wednesday: 'Family',
      Thursday: '',
      Friday: '',
      Saturday: '',
      Sunday: ''
    };

    expect(service.getNewTimeSlot(aclass)).toEqual(emptytimeslot);
  }));
});
