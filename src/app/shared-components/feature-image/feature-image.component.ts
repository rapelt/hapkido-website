import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feature-image',
  templateUrl: './feature-image.component.html',
  styleUrls: ['./feature-image.component.scss']
})
export class FeatureImageComponent implements OnInit {

  @Input()
  image: string;

  constructor() { }

  ngOnInit() {
  }

  setBackgroundImage() {
    return `url(/assets/images/${this.image})`;
  }
}
