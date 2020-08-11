import { TestBed } from '@angular/core/testing';

import { TipoTapaService } from './tipo-tapa.service';

describe('TipoTapaService', () => {
  let service: TipoTapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoTapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
