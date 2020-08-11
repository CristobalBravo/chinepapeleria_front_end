import { TestBed } from '@angular/core/testing';

import { TipoPuntaService } from './tipo-punta.service';

describe('TipoPuntaService', () => {
  let service: TipoPuntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPuntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
