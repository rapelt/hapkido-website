import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsComponent } from './faqs.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {SocialMediaButtonsComponent} from '../shared-components/social-media-buttons/social-media-buttons.component';
import {CardComponent} from '../shared-components/card/card.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BookNowButtonComponent} from '../shared-components/book-now-button/book-now-button.component';
import {FreeTrialBarComponent} from '../shared-components/free-trial-bar/free-trial-bar.component';
import {FeatureComponent} from '../shared-components/feature/feature.component';
import {MenuBarComponent} from '../shared-components/menu-bar/menu-bar.component';

describe('FaqsComponent', () => {
  let component: FaqsComponent;
  let fixture: ComponentFixture<FaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsComponent,
        BookNowButtonComponent,
        FeatureComponent,
        FreeTrialBarComponent,
        FooterComponent,
        CardComponent,
        MenuBarComponent,
        SocialMediaButtonsComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
