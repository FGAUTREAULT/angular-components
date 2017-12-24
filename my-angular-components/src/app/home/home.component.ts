import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../shared/snackbar/snack-bar.service';
import { CardComponent } from '../shared/card/card.component';
import { ToolbarService } from './toolbar/toolbar.service';
import { User } from '../../domain/entity/user.model';
import { UserService } from '../../domain/entity/user.service';
import { AppAttributesService } from '../shared/services/app-attributes.service';

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
    private appUserService: AppAttributesService,
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
    const user: User = this.addUser('User', `${this.userList.length}`, this.userList.length, `Description de User ${this.userList.length}`);
    if (user) {
      this.snackBarService.snackBarSuccess(`Card Added for ${user.firstName} ${user.lastName}`).subscribe();
      this.appUserService.setSelectedUser(user);
    } else {
      this.snackBarService.snackBarError(`Error: creation failed for new user`, 'Close').subscribe();
    }
    console.log(this.userList);
  }

  removeCard() {
    const user = this.appUserService.getSelectedUser();
    this.removeUser(user);
    this.appUserService.setSelectedUser(undefined);
  }

  removeUser(userToRemove: User) {
    this.userList = this.userList.filter((user: User) => {
        return userToRemove.firstName !== user.firstName ||
            userToRemove.lastName !== user.lastName ||
            userToRemove.age !== user.age;
    });
  }

  addUser(firstName: string,
    lastName: string,
    age: number,
    description: string
  ): User {
    let userToAdd: User = new User(firstName, lastName, age, description);

    if (!this.getUser(userToAdd.firstName, userToAdd.lastName, userToAdd.age)) {
        this.userList.push(userToAdd);
    } else {
        userToAdd = null;
    }

    return userToAdd;
  }

  getUser(firstName: string, lastName: string, age: number) {
    return this.userList.find((user: User) => {
        return firstName === user.firstName &&
            lastName === user.lastName &&
            age === user.age;
    });
}

  initUserList() {
    this.userList = this.userService.findAllUser();
  }

  handleClickSave() {
    this.snackBarService.snackBarSuccess('Main component saved').subscribe();
  }

}
