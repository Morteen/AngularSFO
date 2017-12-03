import { TestBed, inject } from '@angular/core/testing';

import { EleverService } from './elever.service';

describe('EleverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EleverService]
    });
  });

  it('should be created', inject([EleverService], (service: EleverService) => {
    expect(service).toBeTruthy();
  }));
});
