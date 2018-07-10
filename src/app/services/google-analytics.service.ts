import { Injectable } from '@angular/core';
import {Angulartics2} from 'angulartics2';

@Injectable({
  providedIn: 'root'
})

export class GoogleAnalyticsService {

  constructor(
    private angulartics2: Angulartics2
  ) {
  }

  send(action: string, category: string, label?: string, value?: string): void {
    console.log(action, category);
/*
    this.angulartics2.eventTrack.next({ action: action, properties: { category: category, label: label, value: value } });
*/
    (<any>window).dataLayer.push({ event: 'custom-event' , action: action, properties: { category: category, label: label, value: value }});
  }
}
