import { TestBed } from '@angular/core/testing';

import { RequestBiomesService } from './request-biomes.service';

describe('RequestBiomesService', () => {
  let service: RequestBiomesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestBiomesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
