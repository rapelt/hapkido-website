import { Component, OnInit } from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  dropdownOpen = false;

  constructor(private sideNavService: SidenavService) { }

  ngOnInit() {
  }

  close() {
    this.sideNavService.sideNav.next();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
