import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { navbarRoutes } from "../app.routes";
import { RouterModule } from "@angular/router";
import { 
    MatIconModule,
    MatButtonModule,
    MatSidenavModule 
} from "@angular/material";

import { MatIcon } from '@angular/material';
import { NavbarUtilsService } from "./navbar/navbar-utils.service";

const LAYOUT_ROUTES = [
    ...navbarRoutes,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true, initialNavigation: true }),
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  exports: [
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  providers: [
        NavbarUtilsService,
  ],
})
export class LayoutModule { }
