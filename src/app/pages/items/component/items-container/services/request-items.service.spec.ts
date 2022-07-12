import { TestBed } from '@angular/core/testing';

import { RequestItemsService } from './request-items.service';

describe('RequestItemsService', () => {
  let service: RequestItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
