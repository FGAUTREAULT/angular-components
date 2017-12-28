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
    ): Promise<User> {
        return new Promise((resolve, reject) => {
            try {
                this.mockUserService.addUser(firstName, lastName, age, description);
                resolve();
              } catch (e) {
                reject(e);
              }
        });
    }

    // Read
    findUser (firstName: string,
        lastName: string,
        age: number
    ): Promise<User> {
        return new Promise((resolve, reject) => {
            try {
                const result = this.mockUserService.getUser(firstName, lastName, age);
                resolve(result);
              } catch (e) {
                reject(e);
              }
        });
    }

    findAllUser (): Promise<User[]> {
        return new Promise((resolve, reject) => {
            try {
                const result = this.mockUserService.getUserList();
                resolve(result);
              } catch (e) {
                reject(e);
              }
        });
    }

    // Update
    updateUser(user: User) {
        return new Promise((resolve, reject) => {
            try {
                this.mockUserService.updateUser(user);
                resolve();
              } catch (e) {
                reject(e);
              }
        });
    }

    updateUsers(users: User[]): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.mockUserService.updateUsers(users);
                resolve();
              } catch (e) {
                reject(e);
              }
        });
    }

    // Delete
    deleteUser(user: User) {
        this.mockUserService.removeUser(user);
    }
}
