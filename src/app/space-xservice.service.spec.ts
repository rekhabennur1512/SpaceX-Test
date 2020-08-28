import { TestBed } from '@angular/core/testing';

import { SpaceXServiceService } from './space-xservice.service';

describe('SpaceXServiceService', () => {
  let service: SpaceXServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceXServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
