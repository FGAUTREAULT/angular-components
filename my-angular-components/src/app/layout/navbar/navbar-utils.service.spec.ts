import { TestBed, inject } from '@angular/core/testing';

import { NavbarUtilsService } from './navbar-utils.service';

describe('NavbarUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarUtilsService]
    });
  });

  it('should be created', inject([NavbarUtilsService], (service: NavbarUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
