import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import {BookNowButtonComponent} from '../shared-components/book-now-button/book-now-button.component';
import {FeatureComponent} from '../shared-components/feature/feature.component';
import {CardComponent} from '../shared-components/card/card.component';
import {BackgroundImageComponent} from '../shared-components/background-image/background-image.component';
import {MenuBarComponent} from '../shared-components/menu-bar/menu-bar.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {SocialMediaButtonsComponent} from '../shared-components/social-media-buttons/social-media-buttons.component';
import {FreeTrialBarComponent} from '../shared-components/free-trial-bar/free-trial-bar.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        BookNowButtonComponent,
        FeatureComponent,
        CardComponent,
        BackgroundImageComponent,
        MenuBarComponent,
        FooterComponent,
        SocialMediaButtonsComponent,
        FreeTrialBarComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
