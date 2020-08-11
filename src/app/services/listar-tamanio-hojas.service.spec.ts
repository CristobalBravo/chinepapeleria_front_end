import { TestBed } from '@angular/core/testing';

import { ListarTamanioHojasService } from './listar-tamanio-hojas.service';

describe('ListarTamanioHojasService', () => {
  let service: ListarTamanioHojasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarTamanioHojasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
