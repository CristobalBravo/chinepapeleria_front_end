import { TestBed } from '@angular/core/testing';

import { ListarColorEspiralService } from './listar-color-espiral.service';

describe('ListarColorEspiralService', () => {
  let service: ListarColorEspiralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarColorEspiralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
