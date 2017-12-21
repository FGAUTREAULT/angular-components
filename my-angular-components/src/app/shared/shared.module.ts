import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUtilsService } from "./services/app-utils.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AppUtilsService,
  ],
})
export class SharedModule { }
