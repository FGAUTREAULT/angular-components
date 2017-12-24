import { Injectable } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { User } from '../../../domain/entity/user.model';

@Injectable()
export class AppAttributesService {

  constructor() { }

  private selectedUser: User;

  getSelectedUser(): User {
    return this.selectedUser;
  }

  setSelectedUser(newuser: User) {
    this.selectedUser = newuser;
  }

}
