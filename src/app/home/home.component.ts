import {Component, HostListener, OnInit} from '@angular/core';
import * as screenfull from 'screenfull';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  shouldPlayVideo = false;

  constructor() { }

  ngOnInit() {
    screenfull.on('change', () => {
      const elem: HTMLVideoElement = <HTMLVideoElement> document.getElementById('backgroundvid');

      if (screenfull.isFullscreen) {
        elem.play();
      } else {
        elem.pause();
        elem.load();
      }
    });
  }

  playVideo() {
    this.shouldPlayVideo = true;
    const elem: HTMLVideoElement = <HTMLVideoElement> document.getElementById('backgroundvid');
    screenfull.request(elem);
  }

}
