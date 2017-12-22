import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { SnackBarSuccessComponent } from "./snack-bar-success/snack-bar-success.component";
import { MatSnackBar } from "@angular/material";
import { SnackBarErrorComponent } from "./snack-bar-error/snack-bar-error.component";
import { SnackBarWarningComponent } from "./snack-bar-warning/snack-bar-warning.component";
import { SnackBarActionComponent } from "./snack-bar-action/snack-bar-action.component";

@Injectable()
export class SnackBarService {

  constructor(
    public snackBar: MatSnackBar
  ) { }

  closeSnackBar() {
    this.snackBar.dismiss();
  }

  snackBarSuccess(keyText: string): Observable<any> {

    return new Observable((observer) => {
      const snackBarRef = this.snackBar.openFromComponent(SnackBarSuccessComponent, {
        data: {
          message: keyText
        },
        duration: 3000
      });
    });
  }

  snackBarWarning(keyText: string): Observable<any> {

    return new Observable((observer) => {
      const snackBarRef = this.snackBar.openFromComponent(SnackBarWarningComponent, {
        data: {
          message: keyText
        },
        duration: 5000
      });
    });
  }

  snackBarError(keyText: string, keyButton: string): Observable<any> {

    return new Observable((observer) => {
      const snackBarRef = this.snackBar.openFromComponent(SnackBarErrorComponent, {
        data: {
          message: keyText,
          messageButton: keyButton,
        }
      });
      // Je stocke le snackBarRef dans le component et sa variable snackBarRefComponent
      snackBarRef.instance.snackBarRefComponent = snackBarRef;
    });
  }

  snackBarAction(keyText: string, keyButton: string): Observable<any> {

    return new Observable((observer) => {
      const snackBarRef = this.snackBar.openFromComponent(SnackBarActionComponent, {
        data: {
          message: keyText,
          messageButton: keyButton,
        }
      });
      // Je stocke le snackBarRef dans le component et sa variable snackBarRefComponent
      snackBarRef.instance.snackBarRefComponent = snackBarRef;

      // On attend l'action de l'utilisateur pour faire le retour
      snackBarRef.onAction().subscribe(() => {
        observer.complete();
      });
    });
  }

}
