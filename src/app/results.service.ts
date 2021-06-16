import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResult } from './data-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  //url = "http://localhost:3000/results";

  constructor(private http:HttpClient) { }

  retrieveResultsByUsername(username:string): Observable<any> {
    //let targetUri = `${this.url}?username=${username}`;
    //console.log("Making call to " + targetUri);
    console.log("Making call to JSON file...");
    return this.http.get('./sequence-data.json');
  }
}
