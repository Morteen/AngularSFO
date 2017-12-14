import { TestBed, inject } from '@angular/core/testing';

import { AttendensService } from './attendens.service';

describe('AttendensService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendensService]
    });
  });

  it('should be created', inject([AttendensService], (service: AttendensService) => {
    expect(service).toBeTruthy();
  }));
});
