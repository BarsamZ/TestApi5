import { TestBed } from '@angular/core/testing';

import { NasaListService } from './nasa-list.service';

describe('NasaListService', () => {
  let service: NasaListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
