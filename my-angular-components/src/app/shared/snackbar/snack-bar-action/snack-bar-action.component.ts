import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-snack-bar-action',
  templateUrl: './snack-bar-action.component.html',
  styleUrls: ['../snack-bar.component.scss']
})
export class SnackBarActionComponent implements OnInit {

  public message: String;
  public messageButton: String;
  public snackBarRefComponent: MatSnackBarRef<SnackBarActionComponent>;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data.message;
    this.messageButton = data.messageButton;
  }

  public handleClickAction() {
    this.snackBarRefComponent.closeWithAction();
  }

  ngOnInit() {
  }

}
