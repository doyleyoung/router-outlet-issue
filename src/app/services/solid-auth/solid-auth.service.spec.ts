import { TestBed } from '@angular/core/testing';

import { SolidAuthService } from './solid-auth.service';

describe('SolidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolidAuthService = TestBed.get(SolidAuthService);
    expect(service).toBeTruthy();
  });
});
