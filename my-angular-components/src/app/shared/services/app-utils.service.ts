import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../../domain/entity/user.model';

@Injectable()
export class AppUtilsService {

  constructor() { }

  static unsubscribeObservable(subscription: Subscription) {
    if (subscription) {
      subscription.unsubscribe();
    }
  }

  removeUser(userToRemove: User, userList: User[]) {
    return userList.filter((user: User) => {
        return userToRemove.firstName !== user.firstName ||
            userToRemove.lastName !== user.lastName ||
            userToRemove.age !== user.age;
    });
  }

  createUser(firstName: string,
    lastName: string,
    age: number,
    description: string, userList: User[]
  ): User {
    let userToAdd: User = new User(firstName, lastName, age, description);

    if (this.getUser(userToAdd.firstName, userToAdd.lastName, userToAdd.age, userList)) {
      userToAdd = null;
    }

    return userToAdd;
  }

  getUser(firstName: string, lastName: string, age: number, userList: User[]) {
    return userList.find((user: User) => {
        return firstName === user.firstName &&
            lastName === user.lastName &&
            age === user.age;
    });
}

}
