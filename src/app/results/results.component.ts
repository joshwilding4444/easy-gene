import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() 
  originalSequence: string = "";
  resultSequence: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
