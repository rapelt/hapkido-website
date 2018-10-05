import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrialBarComponent } from './free-trial-bar.component';
import {BookNowButtonComponent} from '../book-now-button/book-now-button.component';

describe('FreeTrialBarComponent', () => {
  let component: FreeTrialBarComponent;
  let fixture: ComponentFixture<FreeTrialBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FreeTrialBarComponent,
        BookNowButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTrialBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
