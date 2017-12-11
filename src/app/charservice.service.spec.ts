import { TestBed, inject } from '@angular/core/testing';

import { CharserviceService } from './charservice.service';

describe('CharserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharserviceService]
    });
  });

  it('should be created', inject([CharserviceService], (service: CharserviceService) => {
    expect(service).toBeTruthy();
  }));
});
