import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // SideNav
  sidenavOpen: boolean;
  @ViewChild ('sidenav') sidenav;
  
  constructor() { 
    this.sidenavOpen = false;
  }

  ngOnInit() {
  }

  isSidenavOpen(isOpen: boolean) {
    this.sidenavOpen = isOpen;
  }

  handleClickLinkHome() {
    // TODO link home
  }

  handleClickLinkAdministration() {
    // TODO link admin
  }

}
