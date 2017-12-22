import { Component, OnInit } from '@angular/core';
import { SnackBarService } from "../shared/snackbar/snack-bar.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private snackBarService: SnackBarService) { }

  ngOnInit() {
  }

  handleClickSave() {
    this.snackBarService.snackBarSuccess('Main component saved').subscribe();
  }

}
