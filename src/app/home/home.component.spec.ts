import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {MaterialModule} from '../material/material.module';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Angulartics2Module} from 'angulartics2';
import {Angulartics2GoogleTagManager} from 'angulartics2/gtm';
import {FeatureComponent} from '../shared-components/feature/feature.component';
import {BookNowButtonComponent} from '../shared-components/book-now-button/book-now-button.component';
import {MenuBarComponent} from '../shared-components/menu-bar/menu-bar.component';
import {FreeTrialBarComponent} from '../shared-components/free-trial-bar/free-trial-bar.component';
import {CardComponent} from '../shared-components/card/card.component';
import {SocialMediaButtonsComponent} from '../shared-components/social-media-buttons/social-media-buttons.component';
import {BackgroundImageComponent} from '../shared-components/background-image/background-image.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FeatureComponent,
        BookNowButtonComponent,
        MenuBarComponent,
        ToolbarComponent,
        FreeTrialBarComponent,
        CardComponent,
        SocialMediaButtonsComponent,
        BackgroundImageComponent
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
