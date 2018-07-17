import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Angulartics2Module} from 'angulartics2';
import {Angulartics2GoogleTagManager} from 'angulartics2/gtm';
import {MaterialModule} from './material/material.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {GoogleAnalyticsService} from './services/google-analytics.service';
import {SocialMediaButtonsComponent} from './shared-components/social-media-buttons/social-media-buttons.component';
import {FreeTrialBarComponent} from './shared-components/free-trial-bar/free-trial-bar.component';
import {BookNowButtonComponent} from './shared-components/book-now-button/book-now-button.component';
import {BackgroundImageComponent} from './shared-components/background-image/background-image.component';
import {CardComponent} from './shared-components/card/card.component';
import {MenuBarComponent} from './shared-components/menu-bar/menu-bar.component';
import {FeatureComponent} from './shared-components/feature/feature.component';
import {SidenavService} from './services/sidenav.service';
import {SidenavComponent} from './shared-components/sidenav/sidenav.component';
import {AboutComponent} from './about/about.component';
import {FooterComponent} from './shared-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    ToolbarComponent,
    SocialMediaButtonsComponent,
    FreeTrialBarComponent,
    BookNowButtonComponent,
    BackgroundImageComponent,
    CardComponent,
    MenuBarComponent,
    FeatureComponent,
    SidenavComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
    MaterialModule
  ],
  providers: [
    GoogleAnalyticsService,
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
