import { TestBed } from '@angular/core/testing';

import { TipoHojaService } from './tipo-hoja.service';

describe('TipoHojaService', () => {
  let service: TipoHojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoHojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
