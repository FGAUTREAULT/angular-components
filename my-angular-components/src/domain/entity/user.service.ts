import { User } from './user.model';
import { MockUserService } from './mock-user.helper';
import { Injectable } from '@angular/core';


// CRUD
@Injectable()
export class UserService {

    constructor (private mockUserService: MockUserService) {

    }

    // Create
    createUser(firstName: string,
        lastName: string,
        age: number,
        description: string
    ): User {
        return this.mockUserService.addUser(firstName, lastName, age, description);
    }

    // Read
    findUser (firstName: string,
        lastName: string,
        age: number
    ): User {
        return this.mockUserService.getUser(firstName, lastName, age);
    }

    findAllUser (): User[] {
        return this.mockUserService.getUserList();
    }

    // Update
    updateUser(user: User) {
        this.mockUserService.updateUser(user);
    }

    updateUsers(users: User[]) {
        this.mockUserService.updateUsers(users);
    }

    // Delete
    deleteUser(user: User) {
        this.mockUserService.removeUser(user);
    }
}
