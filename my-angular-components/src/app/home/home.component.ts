import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../shared/snackbar/snack-bar.service';
import { CardComponent } from '../shared/card/card.component';
import { ToolbarService } from './toolbar/toolbar.service';
import { User } from '../../domain/entity/user.model';
import { UserService } from '../../domain/entity/user.service';
import { AppAttributesService } from '../shared/services/app-attributes.service';
import { AppUtilsService } from '../shared/services/app-utils.service';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CreateUserModalComponent } from '../shared/modal/create-user-modal/create-user-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('itemLyfeCycle', [
      transition(':enter',
        animate('300ms',
          style({
              transform: 'scale(1)',
              backgroundColor: '#eee'})
        )
      ),
      transition(':leave',
      animate('300ms',
        style({
            transform: 'scale(0)',
            backgroundColor: '#eee'})
      )
    )
    ])
  ],
})
export class HomeComponent implements OnInit {

  constructor(
    private snackBarService: SnackBarService,
    private toolbarService: ToolbarService,
    private userService: UserService,
    private appAttributeService: AppAttributesService,
    private appUtilsService: AppUtilsService,
    private dialog: MatDialog,
  ) { }

  private userList: User[];

  ngOnInit() {
    this.initUserList();
    this.toolbarService.getToolbarEvent().subscribe((event: String) => {

      switch (event) {
        case ToolbarService.TOOLBAR_ADD:
          this.openCreateModal();
          break;
        case ToolbarService.TOOLBAR_REMOVE:
          this.removeCard();
          break;
        default: this.snackBarService.snackBarWarning('An error occur, please retry.');
      }
    });

  }

  openCreateModal() {
    // lance la modal
    let dialogRef: MatDialogRef<CreateUserModalComponent>;
    dialogRef = this.dialog.open(CreateUserModalComponent, { });

    // récupère le résultat après la fermeture de la modal
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.addCard(res);
      }
    });
  }

  addCard(json) {
    // tslint:disable-next-line:max-line-length
    const user: User = this.appUtilsService.createUser(
      json.firstName, json.lastName,
      json.age,
      json.description,
      this.userList);
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
    this.userService.findAllUser()
    .then((result) => {
      this.userList = result;
      this.snackBarService.snackBarSuccess('List of user loaded').subscribe();
    })
    .catch((error) => {
      this.snackBarService.snackBarError(error, 'Close').subscribe();
    });
  }

  handleClickSave() {
    this.userService.updateUsers(this.userList)
    .then(() => {
      this.appAttributeService.setIsCanBeSaved(false);
      this.snackBarService.snackBarSuccess('Main component saved').subscribe();
    })
    .catch((error) => {
      this.snackBarService.snackBarError(error, 'Close').subscribe();
    });
  }

  isCanBeSaved() {
    return this.appAttributeService.getIsCanBeSaved();
  }

}
