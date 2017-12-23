import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUtilsService } from './services/app-utils.service';
import { SnackBarSuccessComponent } from './snackbar/snack-bar-success/snack-bar-success.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SnackBarService } from './snackbar/snack-bar.service';
import { MatSnackBarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { SnackBarErrorComponent } from './snackbar/snack-bar-error/snack-bar-error.component';
import { SnackBarWarningComponent } from './snackbar/snack-bar-warning/snack-bar-warning.component';
import { SnackBarActionComponent } from './snackbar/snack-bar-action/snack-bar-action.component';
import { CardComponent } from './card/card.component';
import { AppAttributesService } from './services/app-attributes.service';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    SnackBarSuccessComponent,
    SnackBarErrorComponent,
    SnackBarWarningComponent,
    SnackBarActionComponent,
  ],
  entryComponents: [
    SnackBarSuccessComponent,
    SnackBarErrorComponent,
    SnackBarWarningComponent,
    SnackBarActionComponent,
  ],
  providers: [
    AppUtilsService,
    SnackBarService,
    AppAttributesService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
