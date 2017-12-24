import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './entity/user.service';
import { MockUserService } from './entity/mock-user.helper';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserService,
    MockUserService,
  ],
})
export class DomainModule { }
