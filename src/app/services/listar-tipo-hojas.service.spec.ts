import { TestBed } from '@angular/core/testing';

import { ListarTipoHojasService } from './listar-tipo-hojas.service';

describe('ListarTipoHojasService', () => {
  let service: ListarTipoHojasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarTipoHojasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
