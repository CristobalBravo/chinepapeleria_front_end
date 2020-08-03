import { TestBed } from '@angular/core/testing';

import { ConfiguracionFlashCardService } from './configuracion-flash-card.service';

describe('ConfiguracionFlashCardService', () => {
  let service: ConfiguracionFlashCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracionFlashCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
