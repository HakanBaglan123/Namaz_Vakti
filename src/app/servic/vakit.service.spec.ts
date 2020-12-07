import { TestBed } from '@angular/core/testing';

import { VakitService } from './vakit.service';

describe('VakitService', () => {
  let service: VakitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VakitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
