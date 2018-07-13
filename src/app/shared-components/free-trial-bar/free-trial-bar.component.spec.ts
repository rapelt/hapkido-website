import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrialBarComponent } from './free-trial-bar.component';

describe('FreeTrialBarComponent', () => {
  let component: FreeTrialBarComponent;
  let fixture: ComponentFixture<FreeTrialBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTrialBarComponent ]
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
