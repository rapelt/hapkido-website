import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KumdoComponent } from './kumdo.component';

describe('KumdoComponent', () => {
  let component: KumdoComponent;
  let fixture: ComponentFixture<KumdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KumdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KumdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
