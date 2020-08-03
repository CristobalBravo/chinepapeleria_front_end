import { TestBed } from '@angular/core/testing';

import { ListarLapizService } from './listar-lapiz.service';

describe('ListarLapizService', () => {
  let service: ListarLapizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarLapizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
