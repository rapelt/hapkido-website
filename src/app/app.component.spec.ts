import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material';
import {MaterialModule} from './material/material.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {SidenavComponent} from './shared-components/sidenav/sidenav.component';
import {SocialMediaButtonsComponent} from './shared-components/social-media-buttons/social-media-buttons.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        ToolbarComponent,
        SidenavComponent,
        SocialMediaButtonsComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
