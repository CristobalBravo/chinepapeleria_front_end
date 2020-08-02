import { TestBed } from '@angular/core/testing';

import { ListarPuntasService } from './listar-puntas.service';

describe('ListarPuntasService', () => {
  let service: ListarPuntasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarPuntasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
