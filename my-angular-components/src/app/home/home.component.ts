import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../shared/snackbar/snack-bar.service';
import { CardComponent } from '../shared/card/card.component';
import { ToolbarService } from './toolbar/toolbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private snackBarService: SnackBarService,
    private toolbarService: ToolbarService
  ) { }

  private cards: String[];

  ngOnInit() {
    this.initCardList();
    this.toolbarService.getToolbarEvent().subscribe((event: String) => {

      switch (event) {
        case ToolbarService.TOOLBAR_ADD:
          this.addCard();
          break;
        case ToolbarService.TOOLBAR_ADD:
          this.removeCard();
          break;
        default: this.snackBarService.snackBarWarning('An error occur, please retry.');
      }
    });

  }

  addCard() {
    const user = `User ${this.cards.length + 1}`;
    this.cards.push(user);
    this.snackBarService.snackBarSuccess(`Card Added for ${user}`).subscribe();
  }

  removeCard() {
    // TODO
  }

  initCardList() {
    this.cards = [];
    this.cards.push('User 1');
    this.cards.push('User 2');
    this.cards.push('User 3');
  }

  handleClickSave() {
    this.snackBarService.snackBarSuccess('Main component saved').subscribe();
  }

}
