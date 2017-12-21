import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from "@angular/router/src";
import { NAVIGATE_PARAM_PAGE_TITLE, NAVIGATE_PARAM_PAGE_TITLE_DEFAULT } from "../../shared/constants/navigate.constants";

@Injectable()
export class NavbarUtilsService {

  constructor() { }

  static getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title: string = (routeSnapshot.data && routeSnapshot.data[NAVIGATE_PARAM_PAGE_TITLE]) ?
      routeSnapshot.data[NAVIGATE_PARAM_PAGE_TITLE] : NAVIGATE_PARAM_PAGE_TITLE_DEFAULT;
      
    if (routeSnapshot.firstChild) {
      title = this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }
}
