import { TestBed } from '@angular/core/testing';

import { ListarTipoTapaService } from './listar-tipo-tapa.service';

describe('ListarTipoTapaService', () => {
  let service: ListarTipoTapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarTipoTapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
