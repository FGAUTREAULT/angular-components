import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HOME_ROUTE } from "./home.route";
import { RouterModule } from "@angular/router";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    RouterModule.forRoot(HOME_ROUTE, { useHash: true, initialNavigation: true }),
  ],
  declarations: [HomeComponent],
  providers: [
    
  ],
})
export class HomeModule { }
