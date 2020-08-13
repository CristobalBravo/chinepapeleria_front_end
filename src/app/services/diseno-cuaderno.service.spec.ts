import { TestBed } from '@angular/core/testing';

import { DisenoCuadernoService } from './diseno-cuaderno.service';

describe('DisenoCuadernoService', () => {
  let service: DisenoCuadernoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisenoCuadernoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
