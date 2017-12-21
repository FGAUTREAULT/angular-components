import { Routes, CanActivate } from '@angular/router';
import { AdministrationComponent } from "./administration.component";
import { NAVIGATE_PARAM_PAGE_TITLE_ADMINISTRATION, NAVIGATE_ADMINISTRATION } from "../shared/constants/navigate.constants";


export const ADMINISTRATION_ROUTE: Routes = [
    {
        path: NAVIGATE_ADMINISTRATION,
        component: AdministrationComponent,
        data: {
            pageTitle: NAVIGATE_PARAM_PAGE_TITLE_ADMINISTRATION
        },
    }
];
