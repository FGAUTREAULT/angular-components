import { Route, Routes } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";

export const navbarRoutes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        outlet: 'navbar'
    }
];
