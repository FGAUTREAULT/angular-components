import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToolbarService {

  static TOOLBAR_ADD = 'ADD';
  static TOOLBAR_REMOVE = 'REVOVE';

  private subjectToolbarEvent = new Subject<any>();

  constructor() { }

  private publishToolbarEvent(event: String) {
    this.subjectToolbarEvent.next(event);
  }

  publishToolbarEventAdd() {
    this.publishToolbarEvent(ToolbarService.TOOLBAR_ADD);
  }

  publishToolbarEventRemove() {
    this.publishToolbarEvent(ToolbarService.TOOLBAR_REMOVE);
  }

  getToolbarEvent(): Observable<any> {
    return this.subjectToolbarEvent.asObservable();
  }

}
