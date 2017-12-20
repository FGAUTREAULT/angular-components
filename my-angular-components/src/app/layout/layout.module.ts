import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { navbarRoutes } from "../app.routes";
import { RouterModule } from "@angular/router";

const LAYOUT_ROUTES = [
    ...navbarRoutes,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true, initialNavigation: true }),
  ],
  exports: [
    RouterModule,
  ],
})
export class LayoutModule { }
