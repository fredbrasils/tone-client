import { TestBed } from '@angular/core/testing';

import { LuthierService } from './luthier.service';

describe('LuthierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LuthierService = TestBed.get(LuthierService);
    expect(service).toBeTruthy();
  });
});
