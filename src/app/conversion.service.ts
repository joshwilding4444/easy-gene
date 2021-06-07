import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() { }

  processSequence(selection:string, sequenceData:string) {
    if(selection === "transcribe") {
      return this.transcribe(sequenceData)
    } else {
      return this.translate(sequenceData)
    }
  }

  transcribe(sequenceData:string) {
    /**
     * TODO: connect to backend DB
     * to do sequence transcription.
     * Temporarily, there is a hard-
     * coded answer.
     */
    return "AUG";
  }

  translate(sequenceData:string) {
    /**
     * TODO: connect to backend DB
     * to do sequence translation
     */
    return "M"
  }
}
