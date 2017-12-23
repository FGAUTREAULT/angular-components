import { TestBed, inject } from '@angular/core/testing';

import { AppAttributesService } from './app-attributes.service';

describe('AppAttributesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppAttributesService]
    });
  });

  it('should be created', inject([AppAttributesService], (service: AppAttributesService) => {
    expect(service).toBeTruthy();
  }));
});
