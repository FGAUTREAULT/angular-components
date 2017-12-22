import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

@Component({
  selector: 'app-snack-bar-success',
  templateUrl: './snack-bar-success.component.html',
  styleUrls: ['../snack-bar.component.scss']
})
export class SnackBarSuccessComponent implements OnInit {

  public message: String;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data.message;
  }

  ngOnInit() {
  }

}
