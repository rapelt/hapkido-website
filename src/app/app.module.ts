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
import {FeatureImageComponent} from './shared-components/feature-image/feature-image.component';
import {GoogleAnalyticsService} from './services/google-analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    ToolbarComponent,
    FeatureImageComponent
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
    GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
