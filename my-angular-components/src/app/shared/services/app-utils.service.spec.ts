import { TestBed, inject } from '@angular/core/testing';

import { AppUtilsService } from './app-utils.service';

describe('AppUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppUtilsService]
    });
  });

  it('should be created', inject([AppUtilsService], (service: AppUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
