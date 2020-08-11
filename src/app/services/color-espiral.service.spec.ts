import { TestBed } from '@angular/core/testing';

import { ColorEspiralService } from './color-espiral.service';

describe('ColorEspiralService', () => {
  let service: ColorEspiralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorEspiralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
