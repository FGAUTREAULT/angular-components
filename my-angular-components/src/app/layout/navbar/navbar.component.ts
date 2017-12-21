import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from "@angular/router";
import { NAVIGATE_ADMINISTRATION, NAVIGATE_HOME, NAVIGATE_PARAM_PAGE_TITLE_HOME } from "../../shared/constants/navigate.constants";
import { NavbarUtilsService } from "./navbar-utils.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // SideNav
  sidenavOpen: boolean;
  @ViewChild('sidenav') sidenav;

  pageTitle: string;

  constructor(
    private router: Router,
    private navbarUtils: NavbarUtilsService) {
    this.sidenavOpen = false;
    this.pageTitle = NAVIGATE_PARAM_PAGE_TITLE_HOME;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.pageTitle = NavbarUtilsService.getPageTitle(this.router.routerState.snapshot.root);
      }
    });
  }

  isSidenavOpen(isOpen: boolean) {
    this.sidenavOpen = isOpen;
  }

  handleClickLinkHome() {
    this.router.navigate([NAVIGATE_HOME]);
  }

  handleClickLinkAdministration() {
    this.router.navigate([NAVIGATE_ADMINISTRATION]);
  }

}
