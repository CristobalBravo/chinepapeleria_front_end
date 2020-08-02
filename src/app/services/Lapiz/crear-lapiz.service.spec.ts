import { TestBed } from '@angular/core/testing';

import { CrearLapizService } from './crear-lapiz.service';

describe('CrearLapizService', () => {
  let service: CrearLapizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearLapizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
