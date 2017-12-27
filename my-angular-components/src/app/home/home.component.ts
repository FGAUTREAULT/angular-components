import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../shared/snackbar/snack-bar.service';
import { CardComponent } from '../shared/card/card.component';
import { ToolbarService } from './toolbar/toolbar.service';
import { User } from '../../domain/entity/user.model';
import { UserService } from '../../domain/entity/user.service';
import { AppAttributesService } from '../shared/services/app-attributes.service';
import { AppUtilsService } from '../shared/services/app-utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private snackBarService: SnackBarService,
    private toolbarService: ToolbarService,
    private userService: UserService,
    private appAttributeService: AppAttributesService,
    private appUtilsService: AppUtilsService,
  ) { }

  private userList: User[];

  ngOnInit() {
    this.initUserList();
    this.toolbarService.getToolbarEvent().subscribe((event: String) => {

      switch (event) {
        case ToolbarService.TOOLBAR_ADD:
          this.addCard();
          break;
        case ToolbarService.TOOLBAR_REMOVE:
          this.removeCard();
          break;
        default: this.snackBarService.snackBarWarning('An error occur, please retry.');
      }
    });

  }

  addCard() {
    // tslint:disable-next-line:max-line-length
    const user: User = this.appUtilsService.createUser(
      'User', `${this.userList.length}`,
      this.userList.length,
      `Description de User ${this.userList.length}`
    , this.userList);
    if (user) {
      this.snackBarService.snackBarSuccess(`Card Added for ${user.firstName} ${user.lastName}`).subscribe();
      this.userList.push(user);
      this.appAttributeService.setSelectedUser(user);
      this.appAttributeService.setIsCanBeSaved(true);
    } else {
      this.snackBarService.snackBarError(`Error: creation failed for new user`, 'Close').subscribe();
    }
  }

  removeCard() {
    const user = this.appAttributeService.getSelectedUser();
    this.userList = this.appUtilsService.removeUser(user, this.userList);
    this.appAttributeService.setSelectedUser(undefined);
    this.appAttributeService.setIsCanBeSaved(true);
  }

  initUserList() {
    this.userList = this.userService.findAllUser();
  }

  handleClickSave() {
    this.userService.updateUsers(this.userList);
    this.appAttributeService.setIsCanBeSaved(false);
    this.snackBarService.snackBarSuccess('Main component saved').subscribe();
  }

  isCanBeSaved() {
    return this.appAttributeService.getIsCanBeSaved();
  }

}
