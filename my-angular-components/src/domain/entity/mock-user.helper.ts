import { User } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MockUserService {

    private userList: User[] = [];

    constructor () {
        this.userList.push(new User('John', 'Smith', 45, 'Description of John Smith'));
        this.userList.push(new User('Jack', 'Reacher', 36, 'Description of Jack Reacher'));
        this.userList.push(new User('Paul', 'Walker', 37, 'Description of Paul Walker'));
    }

    getUserList(): User[] {
        return this.userList;
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

    removeUser(userToRemove: User) {
        this.userList = this.userList.filter((user: User) => {
            return userToRemove.firstName !== user.firstName &&
                userToRemove.lastName !== user.lastName &&
                userToRemove.age !== user.age;
        });
    }

    getUser(firstName: string, lastName: string, age: number) {
        return this.userList.find((user: User) => {
            return firstName === user.firstName &&
                lastName === user.lastName &&
                age === user.age;
        });
    }

    updateUser(userToUpdate: User) {
        const user = this.getUser(userToUpdate.firstName, userToUpdate.lastName, userToUpdate.age);
        user.firstName = userToUpdate.firstName;
        user.lastName = userToUpdate.lastName;
        user.age = userToUpdate.age;
    }

    updateUsers(users: User[]) {
        users.forEach((user) => {
            this.updateUser(user);
        });
    }
}
