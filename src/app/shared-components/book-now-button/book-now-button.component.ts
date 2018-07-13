import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-now-button',
  templateUrl: './book-now-button.component.html',
  styleUrls: ['./book-now-button.component.scss']
})
export class BookNowButtonComponent implements OnInit {

  @Input()
  GATag = '';

  @Input()
  color = '';

  @Input()
  round = false;


  constructor() { }

  ngOnInit() {
  }

  isRound() {
    return this.round ? 'round' : '';
  }

}
