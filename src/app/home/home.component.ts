import {Component, HostListener, OnInit} from '@angular/core';
import * as screenfull from 'screenfull';
import {GoogleAnalyticsService} from '../services/google-analytics.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  shouldPlayVideo = false;
  opened = false;

  constructor( private analytics: GoogleAnalyticsService) { }

  ngOnInit() {
    screenfull.on('change', () => {
      const elem: HTMLVideoElement = <HTMLVideoElement> document.getElementById('backgroundvid');

      if (screenfull.isFullscreen) {
        elem.play();
        this.analytics.send('Start', 'Video - 30 Seconds of Hapkido', Math.floor(elem.currentTime).toString() + ' seconds');
      } else {
        this.shouldPlayVideo = false;
        elem.pause();
        this.analytics.send('Stop', 'Video - 30 Seconds of Hapkido', Math.floor(elem.currentTime).toString() + ' seconds');
        elem.load();
      }
    });
    }

  playVideo() {
    this.shouldPlayVideo = true;
    const elem: HTMLVideoElement = <HTMLVideoElement> document.getElementById('backgroundvid');
    screenfull.request(elem);
  }

  swapMenu() {
    this.opened = !this.opened;
  }

}
