import { TestBed } from '@angular/core/testing';

import { AuthGuardeService } from './auth-guarde.service';

describe('AuthGuardeService', () => {
  let service: AuthGuardeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
