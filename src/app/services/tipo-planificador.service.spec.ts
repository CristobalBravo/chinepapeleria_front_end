import { TestBed } from '@angular/core/testing';

import { TipoPlanificadorService } from './tipo-planificador.service';

describe('TipoPlanificadorService', () => {
  let service: TipoPlanificadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPlanificadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
