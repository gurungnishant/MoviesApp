import { TestBed } from '@angular/core/testing';

import { HeadtvmovieService } from './headtvmovie.service';

describe('HeadtvmovieService', () => {
  let service: HeadtvmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadtvmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
