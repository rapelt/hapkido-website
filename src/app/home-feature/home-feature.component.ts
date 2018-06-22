import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-feature',
  templateUrl: './home-feature.component.html',
  styleUrls: ['./home-feature.component.scss']
})
export class HomeFeatureComponent implements OnInit {
  shouldPlayVideo = false;

  @HostListener('document:fullscreenchange', []) fullScreen() {
    console.log('Blarg');
  }


  constructor() { }

  ngOnInit() {
  }

  playVideo() {
    this.shouldPlayVideo = true;
    const elem: HTMLVideoElement = <HTMLVideoElement> document.getElementById('backgroundvid');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }

    elem.play();

  }

}
