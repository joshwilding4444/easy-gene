import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { USERS } from './user-list';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users:UserInfo[] = USERS;

  constructor(private http: HttpClient) { }

  authenticate(currentUser: UserInfo): Observable<boolean> {
    /**
     * The following is a test implementation,
     * production authentication will use a POST
     * request to a proper authentication URI.
     */
    for(let u of this.users) {
      if(u.username === currentUser.username) {
        if(u.password === currentUser.password) {
          return of(true);
        }
      }
    }
    return of(false);
  }
  
}
