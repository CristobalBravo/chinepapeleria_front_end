import { TestBed } from '@angular/core/testing';

import { TamanioHojaService } from './tamanio-hoja.service';

describe('TamanioHojaService', () => {
  let service: TamanioHojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamanioHojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
