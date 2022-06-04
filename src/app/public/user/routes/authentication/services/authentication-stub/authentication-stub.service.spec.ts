import { TestBed } from '@angular/core/testing';

import { AuthenticationStubService } from './authentication-stub.service';

describe('AuthenticationStubService', () => {
  let service: AuthenticationStubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationStubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
