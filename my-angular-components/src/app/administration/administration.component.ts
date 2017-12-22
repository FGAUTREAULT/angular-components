import { Component, OnInit } from '@angular/core';
import { SnackBarService } from "../shared/snackbar/snack-bar.service";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(private snackBarService: SnackBarService) { }

  ngOnInit() {
  }

  handleClickSave() {
    this.snackBarService.snackBarSuccess('Administration component saved').subscribe();
  }

}
