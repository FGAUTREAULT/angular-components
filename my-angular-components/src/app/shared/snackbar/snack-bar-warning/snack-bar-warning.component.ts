import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from "@angular/material";

@Component({
  selector: 'app-snack-bar-warning',
  templateUrl: './snack-bar-warning.component.html',
  styleUrls: ['../snack-bar.component.scss']
})
export class SnackBarWarningComponent implements OnInit {

  public message: String;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data.message;
  }

  ngOnInit() {
  }

}
