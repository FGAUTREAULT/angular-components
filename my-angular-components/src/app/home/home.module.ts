import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HOME_ROUTE } from "./home.route";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(HOME_ROUTE, { useHash: true, initialNavigation: true }),
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
