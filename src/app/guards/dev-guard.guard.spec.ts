import { TestBed } from '@angular/core/testing';

import { DevGuardGuard } from './dev-guard.guard';

describe('DevGuardGuard', () => {
  let guard: DevGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DevGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
