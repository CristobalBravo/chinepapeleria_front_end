import { TestBed } from '@angular/core/testing';

import { TipoLineaService } from './tipo-linea.service';

describe('TipoLineaService', () => {
  let service: TipoLineaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoLineaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
