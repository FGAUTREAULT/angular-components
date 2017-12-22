import { Component, Inject, ChangeDetectorRef, OnInit, AfterViewChecked } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from "@angular/material";

@Component({
  selector: 'app-snack-bar-error',
  templateUrl: './snack-bar-error.component.html',
  styleUrls: ['../snack-bar.component.scss']
})
export class SnackBarErrorComponent implements OnInit {

  public message: String;
  public messageButton: String;
  public snackBarRefComponent: MatSnackBarRef<SnackBarErrorComponent>;

  constructor( @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {
    this.message = data.message;
    this.messageButton = data.messageButton;
  }

  public handleClickAction() {
    this.snackBarRefComponent.dismiss();
  }

  ngOnInit(): void {
  }

}
