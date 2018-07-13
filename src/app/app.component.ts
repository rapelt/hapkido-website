import {Component, OnInit} from '@angular/core';
import {SidenavService} from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  opened = true;

  constructor(private sidenavService: SidenavService) {

  }

  ngOnInit() {
    this.sidenavService.sideNav.subscribe(() => {
      this.opened = !this.opened;
    });
  }


}
