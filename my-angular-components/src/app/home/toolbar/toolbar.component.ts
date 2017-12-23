import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../../shared/snackbar/snack-bar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private snackBarService: SnackBarService) { }

  ngOnInit() {
  }

  handleClickAddCard() {
    this.snackBarService.snackBarSuccess('Card Added').subscribe();
  }

  handleClickRemoveSelectedCard() {
    this.snackBarService.snackBarSuccess('Selected Card Removed').subscribe();
  }

}
