import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { RouterModule } from "@angular/router";
import { ADMINISTRATION_ROUTE } from "./administration.route";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(ADMINISTRATION_ROUTE, { useHash: true }),
  ],
  declarations: [AdministrationComponent]
})
export class AdministrationModule { }
