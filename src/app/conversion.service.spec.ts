import { TestBed } from '@angular/core/testing';

import { ConversionService } from './conversion.service';

describe('ConversionService', () => {
  let service: ConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly transcribe', () => {
    let result = service.processSequence("transcribe", "TAC");
    expect(result).toEqual("AUG");
  });

  it('should correctly translate', () => {
    let result = service.processSequence("translate", "TAC");
    expect(result).toEqual("M");
  });
});
