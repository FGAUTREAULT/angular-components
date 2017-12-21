import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { RouterModule } from "@angular/router";
import { ADMINISTRATION_ROUTE } from "./administration.route";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ADMINISTRATION_ROUTE, { useHash: true }),
  ],
  declarations: [AdministrationComponent]
})
export class AdministrationModule { }
