import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableComponent } from './timetable.component';
import {BookNowButtonComponent} from '../shared-components/book-now-button/book-now-button.component';
import {FeatureComponent} from '../shared-components/feature/feature.component';
import {FreeTrialBarComponent} from '../shared-components/free-trial-bar/free-trial-bar.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {CardComponent} from '../shared-components/card/card.component';
import {MenuBarComponent} from '../shared-components/menu-bar/menu-bar.component';
import {SocialMediaButtonsComponent} from '../shared-components/social-media-buttons/social-media-buttons.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AlphabetSortPipe} from '../pipes/alphabet-sort.pipe';
import {TimetableService} from './timetable.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TimetableComponent', () => {
  let component: TimetableComponent;
  let fixture: ComponentFixture<TimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableComponent,
        BookNowButtonComponent,
        FeatureComponent,
        FreeTrialBarComponent,
        FooterComponent,
        CardComponent,
        MenuBarComponent,
        SocialMediaButtonsComponent,
        AlphabetSortPipe
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        TimetableService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('setCalendarClasses should create calendar classes', () => {

    component.setCalendarClasses();
  });*/
});
