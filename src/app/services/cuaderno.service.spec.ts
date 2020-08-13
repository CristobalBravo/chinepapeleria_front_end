import { TestBed } from '@angular/core/testing';

import { CuadernoService } from './cuaderno.service';

describe('CuadernoService', () => {
  let service: CuadernoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuadernoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
