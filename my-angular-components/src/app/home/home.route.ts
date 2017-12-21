import { Routes, CanActivate } from '@angular/router';
import { HomeComponent } from "./home.component";
import { NAVIGATE_PARAM_PAGE_TITLE_HOME, NAVIGATE_HOME } from "../shared/constants/navigate.constants";


export const HOME_ROUTE: Routes = [
    {
        path: NAVIGATE_HOME,
        component: HomeComponent,
        data: {
            pageTitle: NAVIGATE_PARAM_PAGE_TITLE_HOME
        },
    }
];
