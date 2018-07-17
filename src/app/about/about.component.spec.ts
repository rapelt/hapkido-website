import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import {BookNowButtonComponent} from '../shared-components/book-now-button/book-now-button.component';
import {FeatureComponent} from '../shared-components/feature/feature.component';
import {CardComponent} from '../shared-components/card/card.component';
import {BackgroundImageComponent} from '../shared-components/background-image/background-image.component';
import {MenuBarComponent} from '../shared-components/menu-bar/menu-bar.component';

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
        MenuBarComponent
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
