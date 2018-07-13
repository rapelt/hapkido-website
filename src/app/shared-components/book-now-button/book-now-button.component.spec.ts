import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowButtonComponent } from './book-now-button.component';

describe('BookNowButtonComponent', () => {
  let component: BookNowButtonComponent;
  let fixture: ComponentFixture<BookNowButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNowButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
