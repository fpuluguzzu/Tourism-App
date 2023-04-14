import { TestBed } from '@angular/core/testing';

import { CitynamesService } from './citynames.service';

describe('CitynamesService', () => {
  let service: CitynamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitynamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
