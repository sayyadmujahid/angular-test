import { TestBed } from '@angular/core/testing';

import { Test200Service } from './test200.service';

describe('Test200Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Test200Service = TestBed.get(Test200Service);
    expect(service).toBeTruthy();
  });
});
