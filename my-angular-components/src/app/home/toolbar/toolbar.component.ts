import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../../shared/snackbar/snack-bar.service';
import { AppAttributesService } from '../../shared/services/app-attributes.service';
import { CardComponent } from '../../shared/card/card.component';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private snackBarService: SnackBarService,
    private appAttributesService: AppAttributesService,
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
  }

  handleClickAddCard() {
    this.toolbarService.publishToolbarEventAdd();
  }

  handleClickRemoveSelectedCard() {
    this.toolbarService.publishToolbarEventRemove();
  }

  isSelectedCard(): boolean {
    return this.appAttributesService.getSelectedUser() !== undefined;
  }

}
