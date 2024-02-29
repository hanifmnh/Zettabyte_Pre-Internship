import { TestBed } from '@angular/core/testing';

import { LiquidService } from './liquid.service';

describe('LiquidService', () => {
  let service: LiquidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiquidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
