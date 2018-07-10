import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {MaterialModule} from '../material/material.module';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Angulartics2Module} from 'angulartics2';
import {Angulartics2GoogleTagManager} from 'angulartics2/gtm';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ToolbarComponent
      ],
      imports: [
        MaterialModule,
        Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
        RouterTestingModule.withRoutes(
          []),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
