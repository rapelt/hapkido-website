import { TestBed, inject } from '@angular/core/testing';

import { GoogleAnalyticsService } from './google-analytics.service';
import {Angulartics2, Angulartics2Module} from 'angulartics2';
import {Angulartics2GoogleTagManager} from 'angulartics2/gtm';
import {RouterTestingModule} from '@angular/router/testing';

describe('GoogleAnalyticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GoogleAnalyticsService,
        Angulartics2
      ],
      imports: [
        Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
        RouterTestingModule.withRoutes(
          []),
      ]
    });
  });

  it('should be created', inject([GoogleAnalyticsService], (service: GoogleAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
