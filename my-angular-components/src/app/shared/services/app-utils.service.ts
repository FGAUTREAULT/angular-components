import { Injectable } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class AppUtilsService {

  constructor() { }

  static unsubscribeObservable(subscription: Subscription) {
    if (subscription) {
      subscription.unsubscribe();
    }
  }

}
