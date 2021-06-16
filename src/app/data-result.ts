export class DataResult {
    id:number;
    templateSequence:string;
    resultSequence:string;
    username:string;

    constructor(id:number, templateSequence:string, resultSequence:string, username:string) {
        this.id = id;
        this.templateSequence = templateSequence;
        this.resultSequence = resultSequence;
        this.username = username;
    }
}