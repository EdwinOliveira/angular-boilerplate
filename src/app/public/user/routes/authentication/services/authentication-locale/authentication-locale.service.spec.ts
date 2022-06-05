import { TestBed } from '@angular/core/testing';

import { AuthenticationLocaleService } from './authentication-locale.service';

describe('AuthenticationLocaleService', () => {
  let service: AuthenticationLocaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationLocaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
