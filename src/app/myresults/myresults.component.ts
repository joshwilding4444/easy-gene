import { Component, OnInit } from '@angular/core';
import { DataResult } from '../data-result';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-myresults',
  templateUrl: './myresults.component.html',
  styleUrls: ['./myresults.component.css']
})
export class MyresultsComponent implements OnInit {

  results: DataResult[] = [];

  constructor(private service: ResultsService) { }

  ngOnInit(): void {
    let targetUsername = sessionStorage.getItem("username");
    if(targetUsername !== null) {
      console.log("target username not null! targetUsername: " + targetUsername);
      this.retrieveResultsByUsername(targetUsername);
    }
  }

  retrieveResultsByUsername(username:string) {
    console.log("Attempting to retrieve results with username: " + username);
    this.service.retrieveResultsByUsername(username).subscribe(
      r => {
        this.results = r;
        console.log("Results: " + r);
      },
      error => {
        console.log("Error: " + error);
      }
    );
  }

}
