export class Message {
    private sessionid: string;
    private status: string;
    private client_name:string;
    private extra: boolean;
    private trace: boolean;
    private recent: boolean;
    private responses: Array<string>;
    private topics: Array<string>;
    private requires: Array<any>;
        
    constructor(sessionid:string, status:string, client_name:string, extra: boolean, trace:boolean, recent:boolean, responses: Array<string>,
             topics: Array<string>){
        
    }
        
}