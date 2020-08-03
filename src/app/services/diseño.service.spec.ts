import { TestBed } from '@angular/core/testing';

import { DiseñoService } from './diseño.service';

describe('DiseñoService', () => {
  let service: DiseñoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiseñoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
