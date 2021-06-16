import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ResultsService } from './results.service';

describe('ResultsService', () => {
  let service: ResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve results based on username', (done) => {
    service.retrieveResultsByUsername("catperson").subscribe(
      result => {
        expect(result).toBeTruthy();
      }
    );
    done();
  });
});
