import { TestBed } from '@angular/core/testing';

import { ListarProductoService } from './listar-producto.service';

describe('ListarProductoService', () => {
  let service: ListarProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
