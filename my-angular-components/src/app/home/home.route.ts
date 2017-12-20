import { Routes, CanActivate } from '@angular/router';
import { HomeComponent } from "./home.component";


export const HOME_ROUTE: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
];
