import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { UserInfo } from './user-info';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate', () => {
    service.authenticate(new UserInfo("catperson", "ilovekittycats")).subscribe(
      result => expect(result).toBeTrue()
    );
  });

  it('should fail on an incorrect username', () => {
    service.authenticate(new UserInfo("notausername", "ilovekittycats")).subscribe(
      result => expect(result).toBeFalse()
    );
  });

  it('should fail on an incorrect password', () => {
    let result = service.authenticate(new UserInfo("catperson", "notapassword")).subscribe(
      result => expect(result).toBeFalse()
    );
  });
});
