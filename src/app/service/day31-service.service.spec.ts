import { TestBed } from '@angular/core/testing';

import { Day31ServiceService } from './day31-service.service';

describe('Day31ServiceService', () => {
  let service: Day31ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Day31ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
