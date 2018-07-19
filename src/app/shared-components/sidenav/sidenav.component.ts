import { Component, OnInit } from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private sideNavService: SidenavService) { }

  ngOnInit() {
  }

  close() {
    this.sideNavService.sideNav.next();
  }

}
