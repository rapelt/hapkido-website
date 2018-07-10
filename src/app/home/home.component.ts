import {Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
